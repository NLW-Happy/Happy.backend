import User from '../models/User';

class UserView {
  public render(user: User) {
    return {
      bio: user.bio,
      email: user.email,
      name: user.name,
      updated_at: user.updated_at,
      created_at: user.created_at,
    };
  }

  public renderMany(users: User[]) {
    return users.map(user => this.render(user));
  }
}

export default new UserView();
