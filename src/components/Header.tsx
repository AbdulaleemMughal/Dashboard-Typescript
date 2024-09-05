import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Badge, Drawer, List, Typography } from "antd";
import { CommentsResponse, RecipesResponse } from "../Typescripts/Card";
import classNames from "classnames";
import { fetchCommentsData, fetchRecipesData } from "../Typescripts/Api";

type HeaderProps = {
  styles: React.CSSProperties;
};

const Header = ({ styles }: HeaderProps) => {
  const [openCommentDrawer, setOpenCommentDrawer] = useState<boolean>(false);
  const [openNotificationDrawer, setOpenNotificationDrawer] = useState<boolean>(false);
  const [handleHeader, setHandleHeader] = useState<boolean>(false);
  const [commentApi, setCommentApi] = useState<CommentsResponse | null>(null);
  const [recipeApi, setRecipeApi] = useState<RecipesResponse | null>(null);

  const fetchComments = async (): Promise<void> => {
    const response = await fetchCommentsData('https://dummyjson.com/comments');
    setCommentApi(response);
  };

  const fetchRecipes = async () => {
    const response = await fetchRecipesData('https://dummyjson.com/recipes');
    setRecipeApi(response);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setHandleHeader(true);
      } else {
        setHandleHeader(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      
      fetchComments();
      fetchRecipes();
    };

  }, []); 

  //Handle Comments Response.
  const handleComment = () => {
    setOpenCommentDrawer(true);
  };

  //Handle Notification Response.
  const handleNotification = () => {
    setOpenNotificationDrawer(true);
  };

  return (
    <>
      <div className={classNames(handleHeader ? "w-full" : "header h-16 flex justify-between items-center")}>
        <input
          type="text"
          className="search-products"
          placeholder="Search Products"
        />
        <div className="flex">
          <div className="mr-2">
            <Badge
              count={commentApi?.comments.length}
              style={{ backgroundColor: "green" }}
            >
              <MdEmail style={styles} onClick={handleComment} />
            </Badge>
          </div>
          <div className="mr-5">
            <Badge count={recipeApi?.recipes.length}>
              <IoIosNotifications style={styles} onClick={handleNotification} />
            </Badge>
          </div>
          {/* Comment Drawer */}
          <Drawer
            title="Comments"
            placement="right"
            closable={true}
            onClose={(): void => {
              setOpenCommentDrawer(false);
            }}
            open={openCommentDrawer}
          >
            <List>
              {commentApi?.comments.map((comment) => (
                <List.Item key={comment.id}>
                  <Typography.Text strong>{comment.body}</Typography.Text>{" "}
                </List.Item>
              ))}
            </List>
          </Drawer>
          {/* Notification Drawer */}
          <Drawer
            title="Orders"
            placement="right"
            closable={true}
            onClose={(): void => {
              setOpenNotificationDrawer(false);
            }}
            open={openNotificationDrawer}
          >
            <List>
              {recipeApi?.recipes.map((recipe) => (
                <List.Item key={recipe.id}>
                  <Typography.Text strong>
                    {recipe.name + ` has been ordered`}
                  </Typography.Text>
                </List.Item>
              ))}
            </List>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Header;
