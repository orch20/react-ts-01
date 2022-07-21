// import PropTypes from 'prop-types';
import css from './Statistics.module.scss';


export const Statistics = ({data, title}) => {
    return <section className="scss.statistics">
  <h2 className="scss.title"> {title ? "Upload stats" : ""}</h2>

  <ul className="scss.stat-list">
    <li className="scss.item">
      <span className="scss.label">.docx</span>
      <span className="scss.percentage">4%</span>
    </li>
    <li className="scss.item">
      <span className="scss.label">.mp3</span>
      <span className="scss.percentage">14%</span>
    </li>
    <li className="scss.item">
      <span className="scss.label">.pdf</span>
      <span className="scss.percentage">41%</span>
    </li>
    <li className="scss.item">
      <span className="scss.label">.mp4</span>
      <span className="scss.percentage">12%</span>
    </li>
  </ul>
</section>
}
