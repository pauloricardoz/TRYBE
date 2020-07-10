const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }
  
  it('teste async', async () => {
    const result = await getUserName (4);
    expect(result).toBe('Mark');
  });

  it('teste', () => {
    expect.assertions(1);
    return getUserName(4).then(result => expect(result).toBe('Mark'));
  });

  it('teste async with try', async () => { // so usa para testar o erro
    const id = 6;
    expect.assertions(1);
    try {
      await getUserName(id)
    } catch (e) {
      return expect(e).toEqual({error:'User with ' + id + ' not found.'})
    }
  });