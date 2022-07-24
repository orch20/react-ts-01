import PropTypes from 'prop-types';
import scss from './Statistics.module.scss';


export const Statistics = ({ stats, title }) => {
  
  return <section className={scss.statistics}>
    { title ? <h2 className={scss.title}>Upload stats</h2> : null }

      <ul className={scss.statList}>
        
        {
          stats.map(data => (

                  <li className={scss.item} key={data.id} style={{ backgroundColor: getRandomColor() }} >
                      <span className={scss.label}>{data.label}</span>
                      <span className={scss.percentage}>{data.percentage + "%"}</span>
                  </li>))
        
        }
              </ul>
            </section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
    })
  ),
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}