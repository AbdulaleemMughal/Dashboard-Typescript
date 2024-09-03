import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Badge, Drawer, List, Typography } from "antd";
import { CommentsResponse, RecipesResponse } from "../Typescripts/Card";

type HeaderProps = {
  styles: React.CSSProperties;
  commentApi: CommentsResponse | null;
  recipeApi: RecipesResponse | null;
};

const Header = ({ styles, commentApi, recipeApi }: HeaderProps) => {
  const [openCommentDrawer, setOpenCommentDrawer] = useState<boolean>(false);
  const [openNotificationDrawer, setOpenNotificationDrawer] =
    useState<boolean>(false);

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
      <div className="header h-16 flex justify-between items-center">
        <input
          type="text"
          className="search-products"
          placeholder="Search Products"
        />
        <div className="flex">
          <div className="mr-2">
            <Badge count={commentApi?.comments.length}>
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
                {
                    recipeApi?.recipes.map((recipe) => (
                        <List.Item key={recipe.id}>
                            <Typography.Text strong>{recipe.name + ` has been ordered`}</Typography.Text>
                        </List.Item>
                    ))
                }
            </List>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Header;
