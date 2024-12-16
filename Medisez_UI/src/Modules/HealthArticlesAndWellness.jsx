import fitness_excercises from "../img/blog/fitness_excercises.jpg";
import doctor_thumb from "../img/blog/fitness_excercises.jpg";

const HealthArticlesAndWellness = () => {
    return(
        <section class="HealthArticlesAndWellness section section-blogs">
				<div class="container-fluid">				
					<div class="section-header section-header-c text-center">
						<h2>Health Articles and Wellness</h2>
					</div>
					
					<div class="row blog-grid-row">
						<div class="col-md-6 col-lg-3 col-sm-12">
							<div class="blog grid-blog">
								<div class="blog-image">
									<a href="#"><img class="img-fluid" src={fitness_excercises} alt="Post Image" /></a>
								</div>
								<div class="blog-content">
									{/* <ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
												<a href="#"><img src={doctor_thumb} alt="Post Author" /> <span>Dr. Ruby Perrin</span></a>
											</div>
										</li>
									</ul> */}
									<h3 class="blog-title"><a href="#">Fitness and Exercise</a></h3>
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
								</div>
							</div>
							
						</div>
						<div class="col-md-6 col-lg-3 col-sm-12">
						
							<div class="blog grid-blog">
								<div class="blog-image">
									<a href="#"><img class="img-fluid" src={fitness_excercises} alt="Post Image" /></a>
								</div>
								<div class="blog-content">
									{/* <ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
												<a href="#"><img src={doctor_thumb} alt="Post Author" /> <span>Dr. Ruby Perrin</span></a>
											</div>
										</li>
									</ul> */}
									<h3 class="blog-title"><a href="blog-details.html">Fitness and Exercise</a></h3>
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
								</div>
							</div>
							
						</div>
						<div class="col-md-6 col-lg-3 col-sm-12">
						
							<div class="blog grid-blog">
								<div class="blog-image">
									<a href="#"><img class="img-fluid" src={fitness_excercises} alt="Post Image" /></a>
								</div>
								<div class="blog-content">
									{/* <ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
												<a href="#"><img src={doctor_thumb} alt="Post Author" /> <span>Dr. Ruby Perrin</span></a>
											</div>
										</li>
									</ul> */}
									<h3 class="blog-title"><a href="#">Fitness and Exercise</a></h3>
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
								</div>
							</div>
							
						</div>
						<div class="col-md-6 col-lg-3 col-sm-12">
						
							<div class="blog grid-blog">
								<div class="blog-image">
									<a href="#"><img class="img-fluid" src={fitness_excercises} alt="Post Image" /></a>
								</div>
								<div class="blog-content">
									{/* <ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
												<a href="#"><img src={doctor_thumb} alt="Post Author" /> <span>Dr. Ruby Perrin</span></a>
											</div>
										</li>
									</ul> */}
									<h3 class="blog-title"><a href="#">Fitness and Exercise</a></h3>
									<p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
								</div>
							</div>
							
						</div>
					</div>
					<div class="view-all text-center"> 
						<a href="#" class="btn btn-primary">View All</a>
					</div>
				</div>
			</section>
    )
}

export default HealthArticlesAndWellness;