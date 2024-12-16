import faq from '../img/faq.svg'
const FrequentlyAskedQuestions = () => {
    return (
        <section class="faq-sec">
				<div class="container-fluid">
					<div class="section-header section-header-c  text-center"><h2>Frequently Asked Questions</h2>
					</div>
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="faq" id="accordion">
								<div class="card card-bt">
									<div class="card-header" id="faqHeading-1">
										<div class="mb-0">
											<h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
												<span class="badge">1</span>What is Lorem Ipsum?
											</h5>
										</div>
									</div>
									<div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
										<div class="card-body">
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
										</div>
									</div>
								</div>
								<div class="card card-bt">
									<div class="card-header" id="faqHeading-2">
										<div class="mb-0">
											<h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
												<span class="badge">2</span> Where does it come from?
											</h5>
										</div>
									</div>
									<div id="faqCollapse-2" class="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
										<div class="card-body">
											<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
										</div>
									</div>
								</div>
								<div class="card card-bt">
									<div class="card-header" id="faqHeading-3">
										<div class="mb-0">
											<h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
												<span class="badge">3</span>Why do we use it?
											</h5>
										</div>
									</div>
									<div id="faqCollapse-3" class="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
										<div class="card-body">
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
										</div>
									</div>
								</div>
								<div class="card card-bt">
									<div class="card-header" id="faqHeading-4">
										<div class="mb-0">
											<h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
												<span class="badge">4</span> Where can I get some?
											</h5>
										</div>
									</div>
									<div id="faqCollapse-4" class="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
										<div class="card-body">
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
										</div>
									</div>
								</div>
								<div class="card card-bt">
									<div class="card-header" id="faqHeading-5">
										<div class="mb-0">
											<h5 class="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
												<span class="badge">5</span> What is Lorem Ipsum?
											</h5>
										</div>
									</div>
									<div id="faqCollapse-5" class="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
										<div class="card-body">
											<p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
										</div>
									</div>
								</div>
						</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="text-center">
								<img class="image-responsive" src={faq} alt="faq_image" width="300px" height="321px" />
							</div>
						</div>
					</div>
				<div class="col-lg-12">
					<div class="row">
						<div class="view-all text-center mr-5"> 
							<a href="#" class="btn btn-primary">View More</a>
						</div>
						<div class="view-all text-center"> 
							<a href="#" class="btn btn-warning">Ask a Question</a>
						</div>
					</div>
				</div>
			</div>
			</section>
    )
}

export default FrequentlyAskedQuestions