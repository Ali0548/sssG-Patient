import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link
          href="/https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/animate.css/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />{" "}
        <link
          href="/assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link
          href="/public/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        {/* <link href="/assets/css/style.css" rel="stylesheet" /> */}
      </Head>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <a href="mailto:contact@fitwellhub.com">contact@fitwellhub.com</a>
            <i className="bi bi-phone"></i> +1 5589 55488 55
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link href="/app">
              <Image
                src="/assets/img/FitwellHub.png"
                alt="logo"
                width={200}
                height={150}
              />
            </Link>
          </h1>

          <Link href="index.html" className="logo me-auto">
            <img src="/assets/img/logo.png" alt="" className="img-fluid" />
          </Link>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="nav-link scrollto active" href="#hero">
                  Home
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#departments">
                  Departments
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#doctors">
                  Doctors
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#appointment" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Make an</span> Appointment
          </a>
        </div>
      </header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Fitwell Hub</h1>
          <h2>
            Fitwell Hub is a complete healthcare and wellbeing solution <br />
            for clinics, individuals and organisations.
          </h2>
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      <main id="main">
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose Fitwell Hub?</h3>
                  <p>
                    Fitwell Hub can provide online systems and look after
                    billing, notetaking, referrals and follow up, as well as
                    doctor and patient management, for a fraction of the cost.
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Our Clinics</h4>
                        <p>
                          Visit one of our in-person telemedicine clinics. Here,
                          you will have a medical assistant to help you sign up
                          and with other services you might need for your
                          treatment.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Satellite</h4>
                        <p>
                          A satellite is walk-in telemedicine clinic with an
                          unmanned kiosk. You’ll have instructions on how to
                          make an appointment, but our process is always the
                          same. Find instructions on what to expect at a kiosk
                          below.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Home</h4>
                        <p>
                          Have an appointment from the comfort of your own home
                          or wherever you may be. Just book an appointment at
                          the time you need it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox play-btn mb-4"
                ></a>
              </div>

              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>
                  "What is Fitwell Hub's healthcare and wellbeing solution for
                  all?"
                </h3>
                <p>
                  Patients can conveniently access healthcare and wellness
                  professionals through Fitwell Hub, whether from the comfort of
                  their homes, in clinics, or at their workplace, at their
                  preferred time. They can easily locate nearby healthcare
                  professionals to cater to their general or specific health
                  needs, promoting overall well-being.
                </p>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-fingerprint"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Patients</a>
                  </h4>
                  <p className="description">
                    Speak to a doctor or pharmacist from home, in-clinic or at
                    work, at a time which suits you. You can find a healthcare
                    and wellness professional near you for all your general or
                    specific needs, so you can look after your body and mind.{" "}
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-gift"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Clinics</a>
                  </h4>
                  <p className="description">
                    We can provide fully covered, all week long administrative
                    support for your clinic and doctors at a fraction of the
                    cost. Our admin team can manage billing, note taking and all
                    post-appointment activities.{" "}
                  </p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-atom"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Organisations</a>
                  </h4>
                  <p className="description">
                    Look after your employees and reduce time off by having
                    on-site medical care. Your company can benefit from having a
                    doctor or pharmacist available throughout the day and access
                    to specialists and wellness professionals.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="fas fa-user-md"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="85"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Doctors</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="far fa-hospital"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="18"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Departments</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="fas fa-flask"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="12"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Research Labs</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="fas fa-award"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="150"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Explore a range of healthcare offerings, including virtual
                consultations, in-clinic support, and workplace medical
                services, <br />
                designed to meet the diverse needs of patients, clinics, and
                organizations.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <h4>
                    <a href="">Virtual Clinic & Pharmacy</a>
                  </h4>
                  <p>
                    Experience convenient, online consultations with healthcare
                    professionals and seamless access to pharmaceutical services
                    through our virtual clinic and pharmacy platform.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-pills"></i>
                  </div>
                  <h4>
                    <a href="">Body & Mind</a>
                  </h4>
                  <p>
                    Prioritize both physical and mental well-being with tailored
                    healthcare and wellness services that promote a holistic
                    approach to health.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-hospital-user"></i>
                  </div>
                  <h4>
                    <a href="">Travel Services</a>
                  </h4>
                  <p>
                    Ensure safe and smooth travel experiences with our
                    specialized services catered to travelers, including medical
                    consultations, vaccinations, and health recommendations for
                    a worry-free journey.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-dna"></i>
                  </div>
                  <h4>
                    <a href="">Business Solutions</a>
                  </h4>
                  <p>
                    Optimize operations and enhance productivity with our
                    comprehensive business solutions, ranging from
                    administrative support for clinics to on-site medical care
                    for organizations, tailored to meet specific business needs
                    and objectives.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-wheelchair"></i>
                  </div>
                  <h4>
                    <a href="">Diagnostics & Health Assessments</a>
                  </h4>
                  <p>
                    Access advanced diagnostic services and comprehensive health
                    assessments, providing valuable insights into your health
                    and aiding in proactive healthcare management.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-notes-medical"></i>
                  </div>
                  <h4>
                    <a href="">Contact Us</a>
                  </h4>
                  <p>
                    If you have any questions about our services or are
                    interested in partnering with us, have a look at our FAQs or
                    get in touch today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="appointment" className="appointment section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Make an Appointment</h2>
              <p>
                Booking an appointment is a very simple process.
                <br /> For a list of services that can be provided virtually
                please see the <i>Virtual Services</i> page.
              </p>
            </div>

            <form
              action="forms/appointment.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="datetime"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                  >
                    <option value="">Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <div className="validate"></div>
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select name="doctor" id="doctor" className="form-select">
                    <option value="">Select Doctor</option>
                    <option value="Doctor 1">Doctor 1</option>
                    <option value="Doctor 2">Doctor 2</option>
                    <option value="Doctor 3">Doctor 3</option>
                  </select>
                  <div className="validate"></div>
                </div>
              </div>

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message (Optional)"
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank
                  you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Make an Appointment</button>
              </div>
            </form>
          </div>
        </section>

        <section id="departments" className="departments">
          <div className="container">
            <div className="section-title">
              <h2>Departments</h2>
              <p>
                Navigate through specialized departments, each focusing on
                specific medical areas, to easily find the healthcare expertise
                you need and receive tailored care and guidance.
              </p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Cardiology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                      Neurology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                      Hepatology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                      Pediatrics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                      Eye Care
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Cardiology</h3>
                        <p className="fst-italic">
                          Access specialized cardiology services, including
                          diagnostics, consultations, and treatment plans, to
                          support heart health and address cardiac concerns with
                          precision and expertise.
                        </p>
                        <p>
                          Discover a dedicated cardiology department offering a
                          range of specialized services for heart health. Our
                          expert cardiologists provide thorough consultations,
                          advanced diagnostics, personalized treatment plans,
                          and ongoing care, ensuring a comprehensive approach to
                          managing cardiovascular conditions. From preventive
                          strategies to advanced interventions, we prioritize
                          your cardiac well-being, striving for a healthier
                          heart and an improved quality of life.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/assets/img/departments-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Neurology</h3>
                        <p className="fst-italic">
                          Explore expert neurology services encompassing
                          diagnostics, consultations, and treatment strategies,
                          dedicated to addressing neurological conditions and
                          optimizing brain health.
                        </p>
                        <p>
                          Our specialized neurologists utilize advanced imaging
                          and diagnostic tools to provide accurate assessments,
                          personalized treatment plans, and ongoing support for
                          individuals dealing with various neurological
                          disorders.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/assets/img/departments-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Hepatology </h3>
                        <p className="fst-italic">
                          Benefit from specialized hepatology services, covering
                          diagnostics, consultations, and personalized treatment
                          plans, to manage liver-related conditions and enhance
                          liver health.
                        </p>
                        <p>
                          Our hepatologists utilize state-of-the-art diagnostic
                          techniques to assess liver function, provide tailored
                          treatment plans, and guide lifestyle changes for
                          optimal liver health and overall well-being.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/assets/img/departments-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Pediatrics</h3>
                        <p className="fst-italic">
                          Access comprehensive pediatric care, including
                          check-ups, vaccinations, and expert consultations,
                          tailored to ensure the well-being and healthy
                          development of infants, children, and adolescents.
                        </p>
                        <p>
                          Our dedicated pediatric team focuses on delivering
                          personalized care, early intervention, and preventive
                          measures to support children's growth, development,
                          and long-term health.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/assets/img/departments-4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row gy-4">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Eye Care </h3>
                        <p className="fst-italic">
                          Receive top-tier eye care services, from comprehensive
                          eye examinations to specialized treatments, designed
                          to preserve vision, detect eye conditions, and
                          maintain optimal eye health.
                        </p>
                        <p>
                          Our experienced optometrists and ophthalmologists
                          offer advanced diagnostic screenings, vision
                          correction options, and treatment plans to protect and
                          enhance your vision, ensuring a clear and bright
                          outlook on life.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/assets/img/departments-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="doctors" className="doctors">
          <div className="container">
            <div className="section-title">
              <h2>Doctors</h2>
              <p>
                Connect with experienced and compassionate doctors across
                various specialties, each dedicated to providing exceptional
                healthcare. Our team of doctors is committed to delivering
                personalized consultations, accurate diagnoses, and effective
                treatment plans, ensuring that your health concerns are
                addressed with the highest level of care and expertise.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="/assets/img/doctors/doctors-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Medical Officer</span>
                    <p>
                      Lead medical visionary driving excellence in healthcare.
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="/assets/img/doctors/doctors-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Anesthesiologist</span>
                    <p>
                      Dedicated to administering safe and precise anesthesia for
                      optimal patient comfort during medical procedures.
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="/assets/img/doctors/doctors-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cardiology</span>
                    <p>
                      Passionate about cardiac health, delivering expert care
                      and personalized treatment for heart-related conditions.
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="/assets/img/doctors/doctors-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Neurosurgeon</span>
                    <p>
                      Bringing expertise in neurosurgery, dedicated to intricate
                      procedures and treatments for neurological conditions,
                      ensuring the best outcomes for patients.
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to common inquiries regarding our services,
                appointments, billing, and more to assist you in navigating your
                healthcare journey with ease.
              </p>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    GENERAL CLINIC POLICIES
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Up to date health card information is the responsibility
                      of the patient. Please remember to bring your health card
                      for each visit. If you fail to provide accurate and up to
                      date health card information, it will result in your claim
                      to OHIP being rejected. All rejected claims are subject to
                      a $20.00 administrative fee plus the cost of visit. Please
                      notify us immediately of changes to your mailing address,
                      email address or telephone number For emergency care,
                      please call 911 to arrange transport to your nearest
                      emergency department.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Why choose Fitwell Hub?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      We focus on you as well demand the highest standards from
                      our team. We are aware of the enormous diversity in Canada
                      and look to offer multiple language speaking professionals
                      and specialty services to assist throughout the country.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    What does telemedicine and virtual care cost?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Walk-in telemedicine and virtual appointments are covered
                      by OHIP. Due to the current COVID-19 pandemic, the Ontario
                      government has made virtual healthcare available to all
                      residents of Ontario regardless of whether they have a
                      valid health card or not. Virtual Appointments are also
                      available to residents in British Columbia, Quebec,
                      Manitoba, and Nova Scotia on a fee for service basis.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    What are your hours of operation and Where are you located?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Please use the Clinic Finder to check for the hours of the
                      clinic near you. Virtual appointments are available 8 am –
                      Midnight, 7 days per week. Fitwell Hub has telemedicine
                      clinics across Ontario. Please use the Click Here to find
                      a clinic near you.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    How do I receive my requisition or doctor note? and if I
                    have not received my results. What should I do?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      All medical documents requested will be sent to the email
                      you provided during registration. If you do not receive
                      your medical document on the same day of your
                      consultation, please email us at admin@fitwellhub.com.{" "}
                      <br /> If you have not been contacted about your lab or
                      imaging results, it is likely that we have not received
                      them yet or the results were negative. For further
                      investigation, please email us at admin@fitwellhub.com
                    </p>
                  </div>
                </li>{" "}
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-6"
                    className="collapsed"
                  >
                    I'm unable to come to the walk-in clinic. Can I still speak
                    with a doctor?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-6"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Of course! Our virtual care services connect you with our
                      doctors by phone or video, from the comfort of your own
                      home or workplace. Virtual visits are available anytime
                      between 8 am – Midnight, 7 days per week. Register for a
                      virtual appointment by clicking book a virtual visit.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-7"
                    className="collapsed"
                  >
                    I need to speak to a doctor today. Is there an option for
                    same day appointments?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-7"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, with a virtual visit. Click book a virtual visit and
                      complete the quick registration form and a doctor will
                      contact you at your preferred selected method of phone or
                      video. Virtual visits are perfect for medical advice,
                      prescriptions, referrals, medical notes and forms,
                      COVID-19 screenings and more.
                    </p>
                  </div>
                </li>{" "}
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-8"
                    className="collapsed"
                  >
                    Can I book a virtual visit with a specialist?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-8"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      We can connect patients with specialists for many services
                      in addition to general health advice. Experts in,
                      Paediatrics, Mental Health, Ketamine Therapy for
                      Depression, Internal Medicine, HIV PrEP and PEP, to name a
                      few.
                    </p>
                  </div>
                </li>{" "}
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-9"
                    className="collapsed"
                  >
                    Can I see the same doctor I saw last time?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-9"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes. Enter the name of the doctor you would like to see in
                      the reason for visit area of the registration form.
                    </p>
                  </div>
                </li>{" "}
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-10"
                    className="collapsed"
                  >
                    Will my telemedicine appointment be private?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-10"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Of course!. Our secure digital platform is compliant with
                      all Canadian security standards including PHIPA, HIPAA,
                      PIPEDA, and PCI to protect your private information. Video
                      consultations are encrypted, and the content is never
                      recorded or stored anywhere.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-11"
                    className="collapsed"
                  >
                    I was unable to connect with my physician via telephone at
                    the time of my appointment. What should I do?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-11"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      It is important that you check the privacy settings on
                      your phone to ensure that you can accept private calls.
                      The number the doctor is calling from may appear as
                      private and it is possible it was rejected by your phone’s
                      settings. In the event of a missed call/video appointment,
                      email us at admin@fitwellhub.com or message us on the chat
                      in the bottom corner of the website and we will be happy
                      to assist.
                    </p>
                  </div>
                </li>{" "}
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-12"
                    className="collapsed"
                  >
                    How do I receive my prescription?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-12"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      During registration, you will be prompted to add the
                      details of your preferred pharmacy. Once the consultation
                      is complete, your prescription will be faxed directly to
                      your listed preferred pharmacy. We also offer home
                      prescription delivery. Let us know during registration and
                      your prescription will be delivered right to your door
                      from our pharmacy partner.
                    </p>
                  </div>
                </li>{" "}
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-13"
                    className="collapsed"
                  >
                    What languages do you offer?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-13"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      English, French, Italian, Mandarin, Farsi, Hindi, Punjabi,
                      Urdu, Gujarati, and Arabic.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-14"
                    className="collapsed"
                  >
                    What are your current wait times?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-14"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Wait times vary by location. To get an estimate, feel free
                      to message us on our webchat.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="/assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Exceptional service! Fitwell Hub revolutionized our
                        healthcare access, making it seamless for our staff.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="/assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fitwell Hub is a game-changer! Quick consultations and
                        healthcare tailored to my freelance lifestyle.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="/assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Impressed with the on-site medical care for my team.
                        Fitwell Hub truly prioritizes our well-being.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="/assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        As a freelancer, time is crucial. Fitwell Hub's
                        convenient virtual consultations have been a lifesaver.
                        The healthcare support I need, right when I need it.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="/assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fitwell Hub's approach to on-site medical care has been
                        a game-changer for my team. Their dedicated service has
                        positively impacted our productivity and overall
                        well-being.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="container">
            <div className="section-title">
              <h2>Gallery</h2>
              <p>
                Explore our visual showcase featuring images capturing our
                healthcare facilities, team members, patient experiences, and
                the state-of-the-art technology we use to deliver top-notch
                medical services.
              </p>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-1.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="/assets/img/gallery/gallery-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-2.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="/assets/img/gallery/gallery-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-3.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="/assets/img/gallery/gallery-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-4.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="/assets/img/gallery/gallery-4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-5.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-6.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="/assets/img/gallery/gallery-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-7.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="/assets/img/gallery/gallery-7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-8.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="/assets/img/gallery/gallery-8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Reach out to us for inquiries, appointments, or any assistance
                you may need. Our team is here to provide you with seamless
                support and ensure a smooth healthcare experience.
              </p>
            </div>
          </div>

          <div>
            <iframe
              style={{ border: "0", width: "100%", height: "350px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>1100 King Street West, Toronto, ON M6k 1E6, Canada</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@fitwellhub.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Fitwell Hub</h3>
                <p>
                  1100 King Street West, Toronto,
                  <br />
                  ON M6k 1E6, Canada <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@fitwellhub.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Virtual Clinic & Pharmacy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Body & Mind</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Travel Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Business Solutions</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Diagnostics & Health Assessments</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Stay informed and updated with our latest healthcare insights,
                  news, and offerings by subscribing to our newsletter.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright
              <strong>
                <span>Fitwell Hub</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">Designed by Fitwell Hub</div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
      <div id="preloader"></div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <Script src="assets/vendor/purecounter/purecounter_vanilla.js"></Script>
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js"></Script>
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js"></Script>
      <Script src="/assets/vendor/php-email-form/validate.js"></Script>
      <Script src="/assets/js/main.js"></Script>
    </>
  );
};

export default Index;
