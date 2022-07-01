import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <div className="course-title-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tags-list">
        {tagsList.map(each => (
          <li className="course-tag-item" key={each.id}>
            <p className="course-tag">{each.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
