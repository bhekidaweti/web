import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Thank you so much for your service guys, Happy client I appreciate it",
      author: "Vuyelwa",
    },
    {
      text: "Ok, I thank you so much. I am so relieved, you don’t know. Thank you, thank you",
      author: "Nemic Solutions",
    },
    {
      text: "Yoh, wherever my MOTHER is, she’s beyond HAPPY, she’s over the moon and resting indeed, all because of DIGWAMAJE",
      author: "Nomthandazo",
    },
    {
      text: "Day made, yoh I am even emotional. Thank you so much. Batswanang lwena ba tlhokwa serious. Thank you for a great service.",
      author: "Lebo",
    },
    
  ];

  return (
    <div className="container py-5">
      {/* Section Title */}
      <h2 className="fw-bold text-dark">
        Why <span className="text-warning">Choose Us?</span>
      </h2>
      <p>
        We have worked with over <strong>100 clients</strong>, over <strong>2 years</strong> in the grave
        service industry with <strong>4 years</strong> experience in the cemetery field.
      </p>

      {/* Testimonials Section */}
      <h4 className="text-warning fw-bold mt-4">Testimonials</h4>
      <div className="mt-3">
        {testimonials.map((item) => (
          <div key={item.id} className="mb-4">
            <h5 className="text-warning fw-bold d-inline me-2">{item.id}</h5>
            <span className="text fst-italic">{`"${item.text}"`}</span>
            <p className="fw-bold text-dark mb-0">- {item.author}</p>
          </div>
        ))}
      </div>
      <div className="row justify-content-center mt-4 testimon">
                <div className="col">
                    <img src="/images/testimon1.jpeg" alt="Testimonial" className="img-fluid rounded" />
                </div>
                <div className="col">
                    <img src="/images/testimon2.jpeg" alt="Testimonial" className="img-fluid rounded" />
                </div>
                <div className="col">
                    <img src="/images/testimon3.jpeg" alt="Testimonial" className="img-fluid rounded" />
                </div>
                <div className="col">
                    <img src="/images/testimon4.jpeg" alt="Testimonial" className="img-fluid rounded" />
                </div>
      </div>
      {/* Right Section */}
      <div className="mt-5">
        <div className="p-4 bg-dark text-white rounded">
          <h4 className="fw-bold">
            WE RENDER HIGH QUALITY SERVICES <br />
            <span className="text-warning">USING HIGH QUALITY MATERIALS</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;