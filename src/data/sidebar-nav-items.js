export default function() {
  return [
    {
      title: "Formations",
      to: "/formations",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Ajouter Formation",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-formation",
    },
    {
      title: "liste des actualités",
      to: "/formations",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Ajouter actualité",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },

    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
