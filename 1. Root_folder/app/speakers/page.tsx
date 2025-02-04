
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Speakers() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg6.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-5 m-auto">
									<div className="heading1 text-center">
										<h1>Our Speakers</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Our Speakers</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== TEAM AREA STARTS =======*/}
					<div className="team-sperkers-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img12.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Prof. Sushmita Jha </Link>
											<div className="space16" />
											<p>Department of Biosciences & Bioengineering, IIT-J</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img13.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Prof. Sampat Raj Vadera </Link>
											<div className="space16" />
											<p>Deputy Director, IIT-J</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img14.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Prof. Avinash Kumar Agarwal </Link>
											<div className="space16" />
											<p>Director, IIT Jodhpur</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img15.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Dr. Manoj Kamal </Link>
											<div className="space16" />
											<p>Professor, Department of Anesthesia & Critical Care, AIIMS Jodhpur</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img16.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Dr. Deepak Kumar Jha </Link>
											<div className="space16" />
											<p>Professor & Head, Department of Neurosurgery, AIIMS Jodhpur</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img17.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Prof. Goverdhan Dutt Puri </Link>
											<div className="space16" />
											<p>Executive Director, AIIMS Jodhpur</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img18.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Dr. Siddharth Srivastava </Link>
											<div className="space16" />
											<p>Professor of Practice, Biosciences & Bioengineering, IIT-J</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="our-team-boxarea">
										<div className="team-widget-area">
											<img src="/assets/img/elements/elements25.png" alt="" className="elements21" />
											<img src="/assets/img/elements/elements26.png" alt="" className="elements22" />
											<div className="img1">
												<img src="/assets/img/all-images/team/team-img19.png" alt="" className="team-img4" />
												<div className="share">
													<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
												</div>
												<ul>
													<li>
														<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
													</li>
													<li>
														<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="space28" />
										<div className="content-area">
											<Link href="/speakers-single">Dr. Anubhav Gupta </Link>
											<div className="space16" />
											<p>Associate Professor, Transfusion Medicine & Blood Bank, AIIMS-J</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== TEAM AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-block d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
										<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />15-17 Febuary 2025</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />IIT Jodhour & AIIMS Jodhpur</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CTA AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-none d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
										<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />15-17 Febuary 2025</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />IIT Jodhpur & AIIMS Jodhpur</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}