
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	return (
		<>

			<div className="hero1-section-area">
				<div className="bg1">
					<img src="/assets/img/bg/header-bg2.png" alt="" className="header-bg1" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hero1-header heading1">
								<h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/icons/sub-logo1.svg" alt="" />UNITING MINDS, REDEFINING HEALTH WITH PURPOSE </h5>
								<div className="space16" />
								<h1 className="text-anime-style-3">
									Indian Conference on MedTech Innovations <br className="d-lg-block d-none" />
									(ICMI) 2025
								</h1>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>
								where leading experts and innovators come together to drive the next generation of healthcare advancements.
								</p>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
									<Link href="/event-schedule" className="vl-btn1">Reserve My Seat</Link>
									<Link href="/about" className="vl-btn2">Learn More</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="header-images">
								<div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
									<img src="/assets/img/all-images/hero/hero-img1.png" alt="" />
								</div>
								<div className="images-content-area" data-aos="fade-up" data-aos-duration={900}>
									<h3>THE MED-TECH INNOVATION CONFERENCE </h3>
									<div className="space12" />
									<Link href="/#">Febuary 15-17, 2025</Link>
									<div className="space12" />
									<Link href="/#">IIT Jodhpur  & AIIMS Jodhpur</Link>
									<div className="space16" />
									<p>Join us for an extraordinary three-day event in Jodhpur, the epicenter of innovation, at The Med-Tech Innovation Conference, organized by AIIMS Jodhpur and IIT Jodhpur. This conference is not just about exploring cutting-edge technologies, but also about fostering collaboration and driving healthcare innovation, making it a unique and valuable experience for all .</p>
								</div>
							</div>
						</div>
						<div className="col-lg-1">
						<Countdown />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
