let typedStrings = typed.getAttribute('data-typed-items')
    typedStrings = typedStrings.split(',')
    new Typed('#typed', {
      strings: typedStrings,
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
