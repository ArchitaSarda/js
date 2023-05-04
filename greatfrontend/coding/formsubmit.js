(() => {
  const formVal = document.querySelector("form");
  formVal.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (formVal.method?.toLowerCase() !== 'post') {
      alert('Incorrect form method value');
      return;
    }

    // if(formVal.action !== URL) {
    //   alert('Incorrect form action value');
    //   return;
    // }

    try {
      const formData = new FormData(formVal);
      const response = await fetch(
        formVal.action,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
          }),
        },
      );
      const text = await response.text();
      alert(text);
    } catch (error) {
      alert('Error submitting form!');
    }
  })
})();