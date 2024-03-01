const Sc = ({data=[]}) => {
    const ubl = data.map((u) => {
      if (parseInt(u.TestResultFirst) >= 200) {
        return u.Email;
      }
    });
    const ubls = ubl.filter((u) => {
      return u != undefined;
    });
    const array = [...new Set(ubls)];
    return array.length;
  };
export default Sc