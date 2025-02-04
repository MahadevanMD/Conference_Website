
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function EventSchedule() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg10.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center">
										<h1>Event Schedule</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Event Schedule</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="choose-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading2 text-center space-margin60">
										<h2>Event Schedule</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/event-single">Plenary Talks</Link>
											<div className="space16" />
											<p>Immerse yourself in insightful discussions led by renowned experts, focusing on cutting-edge advancements and transformative ideas.</p>
											<div className="space24" />
											<Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/event-single">Scientific Paper Presentations</Link>
											<div className="space16" />
											<p>Discover groundbreaking research as professionals present their innovative findings and methodologies.</p>
											<div className="space24" />
											<Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="/event-single">Hackathon & Valedictory Ceremony</Link>
											<div className="space16" />
											<p>Experience the excitement of the grand finale of the Hackathon, followed by a celebratory Valedictory Ceremony.</p>
											<div className="space24" />
											<Link href="/event-single" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					{/*===== EVENT AREA STARTS =======*/}
					<div className="schedule-section-area sp10">
						<div className="container">
							<div className="row">
								<div className="col-lg-14 m-auto">
									<div className="schedule">
										<table>
											<thead>
												<tr>
													<th>Time</th>
													<th>Saturday</th>
													<th>Sunday</th>
													<th>Monday</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>9:30-10:45 AM</td>
													<td>Registrations<br /><span></span></td>
													<td>Plenary Talk<br/><span></span></td>
													<td>Plenary Talk<br /><span></span></td>
												</tr>
												<tr>
													<td>11:00-12:30 PM</td>
													<td>Inauguration & Keynote Speech<br /><span></span></td>
													<td>Plenary Talk<br /><span></span></td>
													<td>Hackathon - Grand Finale<br /><span></span></td>
												</tr>
												<tr>
													<td>12:45-2:00 PM</td>
													<td>Exhibition & Networking Lunch<br /><span></span></td>
													<td>Startup Showcase & Networking Lunch<br /><span></span></td>
													<td>Valedictory Ceremony<br /><span></span></td>
												</tr>
												<tr>
													<td>2:10-3:10 PM</td>
													<td>Plenary Talk<br /><span></span></td>
													<td>Plenary Talk<br /><span></span></td>
													<td><br /><span></span></td>
												</tr>
												<tr>
													<td>3:15-4:30 PM</td>
													<td>Scientific Paper Presentations<br /><span></span></td>
													<td>Scientific Paper Presentations<br /><span></span></td>
													<td><br /><span></span></td>
												</tr>
												<tr>
													<td>4:30-4:50 PM</td>
													<td>Networking Tea Break<br /><span></span></td>
													<td>Networking Tea Break<br /><span></span></td>
													<td><br /><span></span></td>
												</tr>
												<tr>
													<td>5:00-6:30 PM</td>
													<td>Hackathon - Preliminary Round<br /><span></span></td>
													<td>Investor’s Forum<br /><span></span></td>
													<td><br /><span></span></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== EVENT AREA ENDS =======*/}
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
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
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
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
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