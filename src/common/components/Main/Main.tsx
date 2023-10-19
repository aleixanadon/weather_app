import { useDate } from "../../../hooks/useDate";
import { API_RESPONSE_BY_CITY_NAME } from "../../../types/API_RESPONSE_BY_CITY_NAME";
import CustomHeading from "../CustomHeading/CustomHeading";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import './main.css'

const Main: React.FC<{ api_response_by_city_name: API_RESPONSE_BY_CITY_NAME, loading: boolean, magnitude: string }> = ({ api_response_by_city_name, loading }) => {

  const {
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

  const { actual_datetime } = useDate();

  return (
    <main>
      {
        loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <section className="main-weather-info">
            <article className="left-side-info">
              <CustomHeading text={name!!} textColor="white" fontWeight="bolder" fontSize="3em" />
              <CustomHeading text={actual_datetime!!} textColor="white" fontWeight="lighter" />
              <hr />
              <CustomHeading text={`${main?.temp!!}º`} textColor="white" fontWeight="bolder" fontSize="10em" />
              <CustomHeading text={`${main?.temp_max!!}º / ${main?.temp_min!!}º`} textColor="white" fontWeight="normal" />
              <CustomHeading text={`${weather!![0].description!!}`} textColor="white" fontWeight="normal" />
              <CustomHeading text={`Feels likes ${main?.feels_like}º`} textColor="white" fontWeight="normal" />
            </article>
            <article>

            </article>
          </section>
        )
      }
    </main>
  )
}

export default Main