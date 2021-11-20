// Capturing all the <a> click event

document.addEventListener(`click`, e => {
    const origin = e.target.closest("a");
    
    if (origin) {
      console.log(`You clicked ${origin.href}`);
    }
  });
