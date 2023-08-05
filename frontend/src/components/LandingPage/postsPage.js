import React, {useState} from "react";
import "./postsPage.css";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import CloseIcon from '@mui/icons-material/Close';
import MembershipModal from "../Membership/TakeMembership";
import Navbar from "../HomePage/Navbar";
import ShareModal from "../Other/Sharemodel";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";

const CommentModal = ({isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {"author" : "Johnabraham" , "comment" : "Your post advises to Always use functional components. While functional components are indeed a popular choice in React development due to the introduction of hooks."},
    {"author" : "Johnabraham" , "comment" : "Your post advises to Always use functional components. While functional components are indeed a popular choice in React development due to the introduction of hooks."},
    {"author" : "Johnabraham" , "comment" : "Your post advises to Always use functional components. While functional components are indeed a popular choice in React development due to the introduction of hooks."},

  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      let cooom = { author : "venkatesh patnala" , comment : newComment} ;
      setComments((prevComments) => [...prevComments,cooom]);
      setNewComment("");
    }
  };



  return (
    <div>
   
        <div
        className={`${
          isOpen ? "fixed inset-0 z-10 flex justify-end bg-white bg-opacity-50 " : "hidden"
        } bg-black bg-opacity-50`}
          onClick={handleCloseModal}
        >
         
          <div
            className="bg-white w-80 p-4 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          > 
            <div className="mb-4 justify-end">
            <CloseIcon  onClick={onClose} className="cursor-pointer" style={{position:'absolute', right : '30px', top :'10px', color :'red'}}/>
            <h2>@venkatesh Patnala</h2>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Write a comment..."
              />
              <button
                onClick={handleAddComment}
                className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md"
              >
                Comment
              </button>
            </div>

            <div>
              {comments.map((comment, index) => (
                <div key={index} className="border-t border-gray-300 pt-2">
                   <div className="homeAuthorTitle">
              <div className="w-fit">
                <img
                  className="imgPostsAuthor rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="pl-[15px] pt-[5px]">
                <div
                  className="text-[20px]"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h6 className="font-[500]">{comment.author}</h6>
                </div>
              </div>
            </div>

            <div>
         <p>  {comment.comment}</p>  
              </div>

              <div className="flex justify-between">
              <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>234</span>
              </div>
            </div>

            <button>Reply</button>
                </div>

                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
  );
};

const Modal = ({ isOpen, onClose, onSave }) => {
  const [selectedList, setSelectedList] = useState(['save for later', 'private', 'technology']);
  const [newListName, setNewListName] = useState("");
  const [checkedPosts, setCheckedPosts] = useState({});
  const initialValues = {
    list: []
  };


  const handleCheckboxChange = (postId) => {
    setCheckedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const handleNewListNameChange = (event) => {
    setNewListName(event.target.value);
  };

  const handlechange1 = (e) =>{
    setNewListName(e.target.value)
  }

  const handleAddCategory = () => {
setSelectedList([...selectedList, newListName]);
setNewListName('');
  }
  const handleSubmit = (values) => {
    // Do something with the selected categories in values.list
    console.log("Selected Categories:", values.list);
    toast.success("added to the lists");
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 flex items-center justify-center" : "hidden"
      } bg-black bg-opacity-50`}
    >
      <div className="bg-white w-96 p-6 rounded-lg">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form className="flex flex-col justify-center">
          <h2>Select Categories:</h2>
          {selectedList.map((category) => (
            <div className="flex items-center">
              <Field
              type="checkbox"
              name="list"
              value={category}
              checked={values.list.includes(category)}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-500 my-2"
            />
            <label key={category} className="ml-2">
            
              {category}
            </label>
            </div>
          ))}
<hr/>
<div className="flex m-2">
<label>
            New list:
          <input name="newCategory" className="m-2 rounded-md border-2 border-gray-500 p-1" type="text" value={newListName} onChange={(e)=>handlechange1(e)} />
          </label>
          <button
            type="button"
            className="px-1 bg-gray-300 rounded-md"
            onClick={() => handleAddCategory()}
          >
            Add
          </button>
          </div>
        <hr/>
        <div className="flex justify-end mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
          type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>

        </Form>
      )}
    </Formik>
        

       
       </div>
    </div>
  );
};


function PostsPage() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentsopen, setiscomentsopen] = useState(false);
  const [shareopen, setisshareopen] = useState(false);
  const [like, setlike] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleopencommentsmodal = () => {
    setiscomentsopen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleclosesharemodal = () => {
    console.log("working")
    setisshareopen(false);
    console.log(shareopen)
  }

  const handleclosecommentsmodal = () => {
    setiscomentsopen(false);
  }

  const handleopensharemodal = () => {
    setisshareopen(true);
  }

  const handleSaveList = (data) => {
    console.log("List Name:", data.listName);
    console.log("Checked Items:", data.checkedItems);
    // Add logic to save the list or perform any other actions here
  };

  return (
    <div>
         
      <div className="postsPage py-[40px]">
        <h2 className="text-[30px] sm:text-[42px] font-bold">
          Oppenheimer Isn't a Story About the Atomic Bomb, It's About Ourselves
        </h2>
        <div className="homePosts flex justify-start my-[30px]">
          <div>
            <div className="homeAuthorTitle">
              <div className="w-fit">
                <img
                  className="imgPostsAuthor rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="pl-[15px] pt-[5px]">
                <div
                  className="text-[20px]"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Link to='/oprofile'><h6 className="font-[500] cursor-pointer">John Abraham</h6></Link>
                  
                  <span className="dot"></span>
                  <span className="text-[#1A8917]">Follow</span>
                </div>
                <div
                  className="pt-[5px] text-[#6b6b6b]"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span>10 min read</span>
                  <span className="dot"></span>
                  <span>Aug 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="btnsMainDiv py-[15px] px-[10px]">
          <div className="btnsLeftDiv gap-5">
            <div className="btnsDiv">
              <div onClick={() => setlike(!like)}>
                <span>
                 {like ? <FavoriteBorderIcon sx={{color : 'red'}} /> : 
                  <FavoriteBorderIcon/>}
                </span>
              </div>
              <div className="pl-[5px]">
                <span>234</span>
              </div>
            </div>
            <div className="btnsDiv" onClick={handleopencommentsmodal}>
              <CommentModal 
              isOpen={commentsopen}
              onClose={handleclosecommentsmodal}
              />
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>103</span>
              </div>
            </div>
          </div>

          <div className="btnsRightDiv gap-8">
            <div className="btnsDiv" onClick={handleOpenModal}>
              <div>
                <span>
                  <svg width="25" height="25" viewBox="0 0 25 25">
                    <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveList}
      />

            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.38 10.42l-4.6 3.06a.5.5 0 0 1-.78-.41V8.93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <ShareModal isOpen1={shareopen}
        onClose1={handleclosesharemodal} />
            <div className="btnsDiv" onClick={handleopensharemodal}>
     
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <div>
            <p className="postText">
              Oppenheimer Isn't a Story About the Atomic Bomb, It's About
              Ourselves Oppenheimer Isn't a Story About the Atomic Bomb, It's
              About Ourselves Oppenheimer Isn't a Story About the Atomic Bomb,
              It's About Ourselves Oppenheimer Isn't a Story About the Atomic
              Bomb, It's About Ourselves Oppenheimer Isn't a Story About the
              Atomic Bomb, It's About Ourselves Oppenheimer Isn't a Story About
              the Atomic Bomb, It's About Ourselves
            </p>
            <p className="postText">
              Oppenheimer Isn't a Story About the Atomic Bomb, It's About
              Ourselves Oppenheimer Isn't a Story About the Atomic Bomb, It's
              About Ourselves Oppenheimer Isn't a Story About the Atomic Bomb,
              It's About Ourselves Oppenheimer Isn't a Story About the Atomic
              Bomb, It's About Ourselves Oppenheimer Isn't a Story About the
              Atomic Bomb, It's About Ourselves Oppenheimer Isn't a Story About
              the Atomic Bomb, It's About Ourselves
            </p>
          </div>
        </div>

        <div className="postEnd py-[50px]">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="postsTagsDiv gap-5 my-[10px]">
          <span>
            <button className="tagsPostsBtn">Tag1</button>
          </span>
          <span>
            <button className="tagsPostsBtn">Tag2</button>
          </span>
          <span>
            <button className="tagsPostsBtn">Tag3</button>
          </span>
        </div>

        <div className="btnsMainDiv py-[15px] px-[10px]">
          <div className="btnsLeftDiv gap-5">
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>234</span>
              </div>
            </div>
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                  </svg>
                </span>
              </div>
              <div className="pl-[5px]">
                <span>103</span>
              </div>
            </div>
          </div>

          <div className="btnsRightDiv gap-8">
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="25" height="25" viewBox="0 0 25 25">
                    <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.38 10.42l-4.6 3.06a.5.5 0 0 1-.78-.41V8.93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="btnsDiv">
              <div>
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-[50px]">
        <div className="postsPage">
          <div>
            <div className="w-fit">
              <img
                className="imgPostsAuthorDetails rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <div className="postAuthorDetails pt-[5px]">
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h6 className="font-[700] text-[20px] md:text-[25px]">
                      Written by John Abraham
                    </h6>
                  </div>
                  <span>
                    <h6 className="my-[8px]">366 Followers</h6>
                  </span>
                  <span>
                    <h6 className="mt-[8px] mb-[40px]">
                      Sleeping in. Ex-Product at Twitter. Life story:
                      “Nevertheless, she persisted.” Optimist. Technologist.
                      Wearer of many hats.
                    </h6>
                  </span>
                </div>

                <div>
                  <span>
                    <button className="postAuthorDetailsBtn">Follow</button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="my-[40px]">
            <h6 className="font-[700]">More from John Abraham</h6>
            <div className="moreFromPosts my-[40px]">
              <div className="moreFromPostsDiv max-w-[320px]">
                <img
                  className="imgMorePosts"
                  src="https://findbestcourses.com/wp-content/uploads/2022/08/Blogging.png"
                  alt="img"
                />
                <div>
                  <div className="homeAuthorTitle my-[15px]">
                    <div className="w-fit">
                      <img
                        className="imgMorePostsAuthor rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="pl-[5px]">
                      <div>
                        <h6 className="font-[500]">John Abraham</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>Post number 2 from John Abraham 007</span>
                  </div>
                  <div>
                    <span>
                      This post contains the life story of his wife this post
                      contains the life story of his wife
                    </span>
                  </div>
                  <div
                    className="pt-[5px] text-[#6b6b6b]"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span>10 min read</span>
                    <span className="dot"></span>
                    <span>Aug 8, 2023</span>
                  </div>
                  <div className="btnsMainDiv py-[15px]">
                    <div className="btnsLeftDiv gap-5">
                      <div className="btnsDiv">
                        <div>
                          <span>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="pl-[5px]">
                          <span>234</span>
                        </div>
                      </div>
                      <div className="btnsDiv">
                        <div>
                          <span>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="pl-[5px]">
                          <span>103</span>
                        </div>
                      </div>
                    </div>

                    <div className="btnsRightDiv gap-8">
                      <div className="btnsDiv">
                        <div>
                          <span>
                            <svg width="25" height="25" viewBox="0 0 25 25">
                              <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="moreFromPostsDiv max-w-[320px]">
                <img
                  className="imgMorePosts"
                  src="https://findbestcourses.com/wp-content/uploads/2022/08/Blogging.png"
                  alt="img"
                />
                <div>
                  <div className="homeAuthorTitle my-[15px]">
                    <div className="w-fit">
                      <img
                        className="imgMorePostsAuthor rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDNgrRAP3f4gqdGUk8QnwYmCCiCdfXetaCw&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="pl-[5px]">
                      <div>
                        <h6 className="font-[500]">John Abraham</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>Post number 2 from John Abraham 007</span>
                  </div>
                  <div>
                    <span>
                      This post contains the life story of his wife this post
                      contains the life story of his wife
                    </span>
                  </div>
                  <div
                    className="pt-[5px] text-[#6b6b6b]"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span>10 min read</span>
                    <span className="dot"></span>
                    <span>Aug 8, 2023</span>
                  </div>
                  <div className="btnsMainDiv py-[15px] px-[10px]">
                    <div className="btnsLeftDiv gap-5">
                      <div className="btnsDiv">
                        <div>
                          <span>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="pl-[5px]">
                          <span>234</span>
                        </div>
                      </div>
                      <div className="btnsDiv">
                        <div>
                          <span>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="pl-[5px]">
                          <span>103</span>
                        </div>
                      </div>
                    </div>

                    <div className="btnsRightDiv gap-8">
                      <div className="btnsDiv">
                        <div>
                          <span>
                            <svg width="25" height="25" viewBox="0 0 25 25">
                              <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="postPageShowAll">
              <span>
                <button className="seeAllPostsByAuth">
                  See all from John Abraham
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsPage;
