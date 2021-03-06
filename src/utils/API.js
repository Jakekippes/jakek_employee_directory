import axios from "axios";

// eslint-disable-next-line
export default {
  fetchEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=20").then((res) => {
      const employees = res.data.results;
      return employees.map((employee) => {
        return {
          id: employee.id.value,
          firstName: employee.name.first,
          lastName: employee.name.last,
          email: employee.email,
          picture: employee.picture.thumbnail,
        };
      });
    });
  },
};
