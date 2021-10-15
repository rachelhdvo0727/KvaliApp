class User {
  constructor(
    id,
    firstname,
    lastname,
    imageUrl,
    email,
    studyProgram,
    chatToggle,
    eventToggle,
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.imageUrl = imageUrl;
    this.email = email;
    this.studyProgram = studyProgram;
    this.chatToggle = chatToggle;
    this.eventToggle = eventToggle;
  }
}

export default User;
