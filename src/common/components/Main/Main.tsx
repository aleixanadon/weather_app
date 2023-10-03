// import { useDate } from "../../../hooks/useDate";
import { API_RESPONSE_BY_CITY_NAME } from "../../../types/API_RESPONSE_BY_CITY_NAME";
import './main.css'

const Main: React.FC<{ api_response_by_city_name: API_RESPONSE_BY_CITY_NAME }> = ({ api_response_by_city_name }) => {

/*   const {
    coord,
    weather,
    base,
    main,
    visibility,
    wind,
    clouds,
    dt,
    sys,
    timezone,
    id,
    name,
    cod
  } = api_response_by_city_name;

  const { actual_datetime } = useDate(); */

  return (
    <main>
      {/* <section>
        <article>
          <div>
            <h2 className="city_name">{name}</h2>
            <div className="datetime">{actual_datetime}</div>
          </div>
          <div>
            <div className="main_temperature">
              {main?.temp}º
            </div>
            <div>
              <img className="weather_img" src="" alt="" />
              <div>
                <div className="weather_description">{weather!![0].description}</div>
                <div className="feels_like">Feels like {main?.feels_like}º</div>
              </div>
            </div>
          </div>
        </article>
        <article>
          
        </article>
      </section> */}
    </main>
  )
}

export default Main