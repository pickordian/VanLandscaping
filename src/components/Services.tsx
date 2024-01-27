
import { services_list } from "./interface";
function Services() {
  return (
    <section id="Services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services_list.map((service, index) => {
          return (
            <div key={index}>
              <div className="service-info">
                <img src={service.iconSrcD} alt={`${service.alt} icon`} />
                <h3> {service.alt} Services</h3>
                <p>{service.description}</p>
              </div>
              <img
                src={service.imgSrc}
                alt={`Example ${service.alt} work done by Van's landscaping`}
              />
            </div>
          );
        })}{" "}
        <p>
          Not sure if we offer the service you want?{" "}
          <a href="mailto:khanhcvan263@gmail.com">Email Us!</a>
        </p>
      </div>
    </section>
  );
}

export default Services;
