import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
          <span className="ccbp-heading">CCBP 4.0</span>
        </div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(each => renderTimeLineCard(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
