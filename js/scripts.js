// Now, our JavaScript needs to get the value from the form inputs, insert them into the <span>s where the information should go, and then un-hide the story itself. We know how to insert text into our pages, so let's get that working before we try to get the data from the form://


//   $(document).ready(function() {
//    $("#blanks form").submit(function() {
//       $(".person1").append("blah blah");
//       $(".person2").append("blah blah");
//       $(".animal").append("blah blah");
//       $(".exclamation").append("blah blah");
//       $(".verb").append("blah blah");
//       $(".noun").append("blah blah");

//       $("#story").show();
//       // The submit() function attaches an event listener for when a form is submitted. It's different from the click() function because a form can be submitted by clicking the submit button, of course, but it can also be submitted by pressing Enter while a form field is selected. But when we submit the form, the story briefly flashes and then disappears. What's happening is that, by default, forms try to send the information somewhere, and since we haven't told it where to submit to, the page just refreshes and erases our hard work. If you look in the URL bar, you can see that there's a ? at the end of the address now. This is your clue that the form has been submitted to nowhere and the page refreshed. We need to prevent the default action for the form://
      
//       event.preventDefault();
//   });
// });
 // upated code to capture out form inpus //

 $(document).ready(function() {
  $("#blanks form").submit(function(event) {
      var person1Input = $("input#person1").val();
      var person2Input = $("input#person2").val();
      var animalInput = $("input#animal").val();
      var exclamationInput = $("input#exclamation").val();
      var verbInput = $("input#verb").val();
      var nounInput = $("input#noun").val();
      $(".person1").append(person1Input);
      $(".person2").append(person2Input);
      $(".animal").append(animalInput);
      $(".exclamation").append(exclamationInput);
      $(".verb").append(verbInput);
      $(".noun").append(nounInput);

      $("#story").show();

      event.preventDefault();
  });
});

// There's one last thing to fix, though. If you don't refresh the page and you change the value of one of the inputs, it just adds it after the first value, instead of replacing it. We need to replace the existing text rather than just appending to it: //

// CODE BELOW DOES NOT SEEM TO WORK!!!!//

// (document).ready(function() {
//   $("#blanks form").submit(function(event) {
//       var person1Input = $("input#person1").val();
//       var person2Input = $("input#person2").val();
//       var animalInput = $("input#animal").val();
//       var exclamationInput = $("input#exclamation").val();
//       var verbInput = $("input#verb").val();
//       var nounInput = $("input#noun").val();
//       $(".person1").text(person1Input);
//       $(".person2").text(person2Input);
//       $(".animal").text(animalInput);
//       $(".exclamation").text(exclamationInput);
//       $(".verb").text(verbInput);
//       $(".noun").text(nounInput);

//       $("#story").show();

//       event.preventDefault();
//   });
// });