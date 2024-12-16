import why_choose_us from '../img/why-choose-us.svg' 

const WhyPeoplesChooseUs = () => {
    return (
        <section class="Choose_Us section section-features">
				<div class="container">
					<div class="section-header section-header-c  text-center">
						<h2>Why Peoples Choose Us </h2>
					</div>
					<div class="row">
						<div class="col-lg-6 mt-5">
							<img class="image-responsive" src={why_choose_us} alt="faq_image" />
						</div>
						<div class="col-lg-6">
							<div class="applay-now-left-test">
								<div class="step-timeline mb-5">
									<ul>
										<li data-counter="1">
											<strong class="choose-us-q">Search your nearest Doctor</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</li>
										<li data-counter="2">
											<strong class="choose-us-q">Book Appointments easily</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</li>
										<li data-counter="3">
											<strong class="choose-us-q">Read frequently asked questions and Ask a question.</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</li>
										<li data-counter="4">
											<strong class="choose-us-q">Read top Health Articles</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}

export default WhyPeoplesChooseUs;