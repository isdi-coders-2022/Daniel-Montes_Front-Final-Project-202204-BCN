import reducers from "../favsSlice/favsSlice";

test("reducers", () => {
  let state;
  state = reducers(
    {
      favs: [],
    },
    {
      type: "penguins/loadPenguins",
      payload: [
        {
          name: "Dispatcher",
          category: "Follonero",
          likes: 2,
          image:
            "http://2.bp.blogspot.com/-f8hcW8lWh4s/T11mUkJrT4I/AAAAAAAAB8U/Vsnt2CHyVJo/w1200-h630-p-k-no-nu/Humboldt+Penguin.jpg",
          description:
            "I'm baby cloud bread vexillologist butcher vice fashion axe disrupt helHammock distillery pitchfork stumptown…",
          id: "629d69312145d66cc942e83a",
        },
        {
          name: "Jose Antonio",
          category: "liberal",
          likes: 500,
          image:
            "https://www.suffolkgazette.com/wp-content/uploads/2015/06/penguin.jpg",
          description:
            "I'm baby cloud bread vexillologist butcher vice fashion axe disrupt helHammock distillery pitchfork stumptown…",
          "I'm baby cloud bread vexillologist butcher vice fashion axe disrupt helHammock distillery pitchfork stumptown…":
            "",
          id: "629d6ac92145d66cc942e83b",
        },
        {
          name: "Santi",
          category: "pandillero",
          description:
            "I'm baby cloud bread vexillologist butcher vice fashion axe disrupt helHammock distillery pitchfork stumptown…",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.66ZXXBAEMtccmKYamggwVQHaFj%26pid%3DApi&f=1",
          id: "62a290d5adcbd66099e8ae49",
        },
        {
          name: "Patrick",
          category: "cotilla",
          image:
            "https://www.penguinworld.com/types/eudyptes_files/stacks-image-91badb8.jpg",
          description:
            "I'm baby cloud bread vexillologist butcher vice fashion axe disrupt helHammock distillery pitchfork stumptown…",
          id: "62a2932aadcbd66099e8ae4a",
        },
      ],
    }
  );
  expect(state).toEqual({ favs: [] });
});
