import React from 'react';
import UserPhoto from './userPhoto.jsx';
import TextParagraph from './expandableParagraph.jsx';
import styles from './reviewListEntry.css';

export default class ReviewsListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.flagReview = this.flagReview.bind(this);
  }

  flagReview() {
    //display modal to collect info
    //this.props.onFlagReview(this.props.review._id);
    let flagInfo = {id: this.props.review._id}
    console.log('flagged review', flagInfo);
  }



  render () {

    return (
      <div id="review-item" className={styles.listItem}>
        <div className="review-item-header">
          <div id="review-item-pull-right" className={styles.pullRight} >
            <div className="review-item-flag-button" className={styles.flagButton} onClick={this.flagReview}>
              <svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false" style={{height:'1em', width:'1em', display:'block', fill:"rgb(118, 118, 118)"}}>
                <path d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z" fillRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div id="review-item-user-details" className={styles.userDetails}>
            
            <div id="revidw-item-show-inline-block" className={styles.userShowInlineBlock}>
              <div id="review-item-username-left-boundary" className={styles.usernameLeftBoundary} >
                <div id="review-item-username" className={styles.username}>
                  <h3>
                    <span>{this.props.review.user}</span>
                  </h3>
                </div>
                <div id="review-item-date" className={styles.date}>
                  <span>{this.props.review.date}</span>
                </div>
              </div> 
            </div>
            <UserPhoto id="review-item-user-photo" className={styles.userPhoto} />
          </div>
          
        </div>
        <TextParagraph content={this.props.review.comment} id="review-item-comment" className={styles.comment}/>
        <hr id="review-item-hr" className={styles.hr} />
      </div>
    );
  }
}