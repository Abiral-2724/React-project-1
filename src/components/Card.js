import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedcourses = props.likedcourses;
  let setlikedcourses = props.setlikedcourses;

  function clickHandler() {
    if (likedcourses.includes(course.id)) {
      // pahle se like huya pada ha
      // cid = previous course ki id
      setlikedcourses((prev) => prev.filter((cid) => cid != course.id));
      toast.warning("Like Remove");
    } else {
      // pahle se like nahi huya  ha
      // insert karna ha ye course liked course me
      if (likedcourses.length === 0) {
        setlikedcourses([course.id]);
      } else {
        // non emptyy pahle se
        // to pura data bhi dale gee to + couse.id bhi add kare gee
        setlikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked succesfully");
    }
  }
  return (
    <div className="card-div">
      <div className="relative ">
        <img src={course.image.url} alt="Course Image" className="" />

        <div>
          <button class="like-button" onClick={clickHandler}>
            {likedcourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="course-content-div">
        <p className="course-title">{course.title}</p>
        <p className="course-para">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
