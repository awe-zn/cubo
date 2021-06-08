const elements = [
  ...document.querySelectorAll(".toggle-class[data-target][data-toggle]"),
];

elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e);

    const {
      target: {
        dataset: { target, toggle },
      },
    } = e;

    console.log({ target });

    document.querySelector(target).classList.toggle(toggle);
  });
});
