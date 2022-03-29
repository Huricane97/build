gsap.registerPlugin(ScrollTrigger)
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$("#scroll").fadeIn();
		} else {
			$("#scroll").fadeOut();
		}
	});
	$("#scroll").click(function () {
		$("html, body").animate({
				scrollTop: 0,
			},
			40
		);
		return false;
	});
});

// HAMBURGER TOGGLER
$(".hamburger-menu").on("click", function () {
	$(".hamburger-menu").toggleClass("animate");
	$("#overlay").toggleClass("overlay-active");
	$(".main-top-section").toggleClass("mobile-view");
	$("body").toggleClass("fix-screen-mobile");
	$(".hero-background").toggleClass("overflow-initial");
});
$(document).ready(function () {
	const Section1 = document.querySelector("#mint");
	const Section2 = document.querySelector("#about");
	const Section3 = document.querySelector("#showcase");
	const Section4 = document.querySelector("#mission");
	const Section5 = document.querySelector("#roadmap");
	const Section6 = document.querySelector("#Team");
	const Section7 = document.querySelector("#Team");
	const Section8 = document.querySelector("#Team");
	// const mainMenu = document.querySelector(" #main-menu ");

	//  SECTION-1 SCROLL
	$(".section-1").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section1.scrollIntoView();
	});

	// SECTION-2 SCROLL
	$(".section-2").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section2.scrollIntoView();
	});

	// SECTION-3 SCROLL
	$(".section-3").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section3.scrollIntoView();
	});

	// SECTION-4 SCROLL
	$(".section-4").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section4.scrollIntoView();
	});

	// SECTION-5 SCROLL
	$(".section-5").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section5.scrollIntoView();
	});

	// SECTION-6 SCROLL
	$(".section-6").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section6.scrollIntoView();
	});
	$(".section-7").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section7.scrollIntoView();
	});
	$(".section-8").click(function () {
		// mainMenu.click();
		$(".hamburger-menu").removeClass("animate");
		$("#overlay").removeClass("overlay-active");
		$(".main-top-section").removeClass("mobile-view");
		$("body").removeClass("fix-screen-mobile");
		Section8.scrollIntoView();
	});
});
AOS.init({
	once: true,
});
// FIRST CARD TIMELINE ANIMATION
const tl = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-first",
		start: "top 60%",
		end: "center top",
	}
});
tl.from(".poker-card-first", {
	x: 20,
	duration: .2,
	opacity: 0
})
tl.from(".backside-poker-card-first", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// SECOND CARD TIMELINE ANIMATION
const t2 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-second",
		start: "top 60%",
		end: "center top",
	}
});
t2.from(".poker-card-second", {
	x: 20,
	duration: .2,
	opacity: 0
})
t2.from(".backside-poker-card-second", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// THIRD CARD TIMELINE ANIMATION
const t3 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-third",
		start: "top 60%",
		end: "center top",
	}
});
t3.from(".poker-card-third", {
	x: 20,
	duration: .2,
	opacity: 0
})
t3.from(".backside-poker-card-third", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// FOUR CARD TIMELINE ANIMATION
const t4 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-four",
		start: "top 60%",
		end: "center top",
	}
});
t4.from(".poker-card-four", {
	x: 20,
	duration: .2,
	opacity: 0
})
t4.from(".backside-poker-card-four", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// FIVE CARD TIMELINE ANIMATION
const t5 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-five",
		start: "top 60%",
		end: "center top",
	}
});
t5.from(".poker-card-five", {
	x: 20,
	duration: .2,
	opacity: 0
})
t5.from(".backside-poker-card-five", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// SIX CARD TIMELINE ANIMATION
const t6 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-six",
		start: "top 60%",
		end: "center top",
	}
});
t6.from(".poker-card-six", {
	x: 20,
	duration: .2,
	opacity: 0
})
t6.from(".backside-poker-card-six", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// SEVEN CARD TIMELINE ANIMATION
const t7 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-seven",
		start: "top 60%",
		end: "center top",
	}
});
t7.from(".poker-card-seven", {
	x: 20,
	duration: .2,
	opacity: 0
})
t7.from(".backside-poker-card-seven", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// EIGHT CARD TIMELINE ANIMATION
const t8 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-eight",
		start: "top 60%",
		end: "center top",
	}
});
t8.from(".poker-card-eight", {
	x: 20,
	duration: .2,
	opacity: 0
})
t8.from(".backside-poker-card-eight", {
	left: "0%",
	duration: .4,
	opacity: 0
})

// NINE CARD TIMELINE ANIMATION
const t9 = gsap.timeline({
	stagger: ".02",
	scrollTrigger: {
		trigger: ".poker-roadmap-card-nine",
		start: "top 60%",
		end: "center top",
	}
});
t9.from(".poker-card-nine", {
	x: 20,
	duration: .2,
	opacity: 0
})
t9.from(".backside-poker-card-nine", {
	left: "0%",
	duration: .4,
	opacity: 0
})