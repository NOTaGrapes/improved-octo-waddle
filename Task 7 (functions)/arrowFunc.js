function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Are u agree?",
    ()=> alert("You agree."),
    ()=> alert("You abort process")
  );