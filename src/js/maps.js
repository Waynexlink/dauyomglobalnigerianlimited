const locationButtons = document.querySelectorAll(".location-btn");
const mapIframe = document.getElementById("location-map");

const locations = {
  abuja: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.3770784981757!2d7.393479475020008!3d9.120372290944651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddfa995251bb1%3A0x523d353c043d6440!2sDauyom%20MOTORS!5e0!3m2!1sen!2sng!4v1760292294497!5m2!1sen!2sng",
    title: "Dauyom Motors Location - Abuja",
  },
  lagos: {
    url: "YOUR_LAGOS_GOOGLE_MAPS_EMBED_URL_HERE", // Replace with actual Lagos URL
    title: "Dauyom Motors Location - Lagos",
  },
};

locationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const location = button.dataset.location;

    // Update active state
    locationButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Update map
    if (mapIframe && locations[location]) {
      mapIframe.src = locations[location].url;
      mapIframe.title = locations[location].title;
    }
  });
});
