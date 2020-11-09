export const checkInUser = new Promise(function(resolve) {
    setTimeout(() => {
      resolve({
            user: {
                userid: 1234,
                returning: true
            }
      });
    }, 1234);
  });
  