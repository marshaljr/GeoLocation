const findMyState = () => {
  const _state = document.querySelector(".state");

  const success = (position) => {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    _state.textContent = latitude + " - " + longitude;
  };
  const error = () => {
    _state.textContent = "Unable to retrieve your location";
  };
  navigator.geolocation.getCurrentPosition(success, error);
};

document.querySelector(".btn").addEventListener("click", findMyState);
