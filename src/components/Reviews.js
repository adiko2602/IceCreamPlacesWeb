import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Link as MuiLink,
  IconButton,
  TextField,
  Rating,
  Button,
} from "@mui/material";
import { useUser } from "../context/UserContext";

import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { CreateReview, DeleteReview } from "../services/review";
import { GetShopById } from "../services/shop";

const Reviews = ({ reviews, shopId, setShop }) => {
  const [addReview, setAddReview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reviewContent, setReviewContent] = useState({
    rate: 5,
    content: "",
  });

  const userContext = useUser();

  const handleShopUpdate = async (shopId) => {
    setShop(await GetShopById(shopId));
  };

  const handleCreateReview = async (shopId) => {
    setError("");

    setLoading(true);

    const createReviewData = await CreateReview(shopId, reviewContent);
    if (!createReviewData.status) {
      setError(createReviewData.message);
      setLoading(false);
      return;
    }

    handleShopUpdate(shopId);
    setAddReview(false);
    setReviewContent({ rate: 5, content: "" });
    setLoading(false);
  };

  const handleDeleteRewiev = async (e, shopId, rewievId) => {
    setError("");

    setLoading(true);
    e.preventDefault();

    const deleteReviewData = await DeleteReview(shopId, rewievId);
    if (!deleteReviewData.status) {
      setError(deleteReviewData.message);
      setLoading(false);
      return;
    }

    handleShopUpdate(shopId);
    setLoading(false);
  };

  if (loading || !userContext.user)
    return (
      <div className="flex-row full-width flex-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );

  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title={
          <div className="flex-row flex-space-between">
            <div>Oceny i komentarze</div>
            <IconButton
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setAddReview(() => !addReview);
              }}
            >
              {!addReview && <AiOutlinePlus />}
              {addReview && <AiOutlineMinus />}
            </IconButton>
          </div>
        }
      />
      <CardContent className="card-content">
        {error && <div className="error">{error}</div>}

        {addReview && (
          <>
            <Rating
              name="simple-controlled"
              value={reviewContent.rate}
              onChange={(event, newValue) => {
                setReviewContent({ ...reviewContent, rate: newValue });
              }}
            />
            <TextField
              fullWidth
              type="text"
              id="name"
              value={reviewContent.content}
              onChange={(e) => {
                setReviewContent({
                  ...reviewContent,
                  content: e.target.value,
                });
              }}
            />
            <Button
              disabled={!reviewContent.content}
              fullWidth
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                handleCreateReview(shopId);
              }}
            >
              Dodaj
            </Button>
          </>
        )}
        {reviews.map((review) => {
          return (
            <Card key={review._id} className="card">
              <CardHeader
                className="card-header"
                title={
                  <Typography variant="body2">
                    <div className="flex-row flex-space-between">
                      {/* <div>{createStars(review.rate)}</div> */}
                      <div>
                        <Rating name="read-only" value={review.rate} readOnly />
                      </div>
                      <div>{review.updatedAt.slice(0, 10)}</div>
                    </div>
                  </Typography>
                }
              />
              <CardContent className="card-content">
                <Typography variant="body1">{review.content}</Typography>
              </CardContent>
              {review.user === userContext.user._id && (
                <CardContent className="card-content">
                  <Typography variant="h5">
                    <div className="flex-row flex-space-between">
                      <div></div>
                      <IconButton
                        onClick={(e) =>
                          handleDeleteRewiev(e, shopId, review._id)
                        }
                        color="primary"
                        component="label"
                      >
                        <CiTrash />
                      </IconButton>
                    </div>
                  </Typography>
                </CardContent>
              )}
            </Card>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Reviews;
