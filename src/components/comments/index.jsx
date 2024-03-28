import { icon } from "../../constants";

const Comments = () => {
  const comments = [
    {
      userName: "Hellen Jummy",
      comment:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      department: "Team Lead",
      companyLogo: icon.logoOne,
      userPhoto: icon.userOne,
    },
    {
      userName: "Hellena John",
      comment:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      department: "Co-founder",
      companyLogo: icon.logoTwo,
      userPhoto: icon.userTwo,
    },
    {
      userName: "David Oshodi",
      comment:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      department: "Manager",
      companyLogo: icon.logoThree,
      userPhoto: icon.userThree,
    },
    {
      userName: "Charolette Hanlin",
      comment:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      department: "CEO",
      companyLogo: icon.logoFour,
      userPhoto: icon.userFour,
    },
    {
      userName: "Ralph Edwards",
      comment:
        "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      department: "Product Designer",
      companyLogo: icon.logoThree,
      userPhoto: icon.userThree,
    },
  ];
  return <div>Comments</div>;
};

export default Comments;
