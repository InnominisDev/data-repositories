
import { FakeDbRepository } from './FakeDbRepository'

import { UserEntity as User } from '../test/UserEntity'
import { PostEntity as Post } from '../test/PostEntity'

export const $users = new FakeDbRepository('http://localhost:8077','test_db','users', User)
export const $posts = new FakeDbRepository('http://localhost:8077','test_db','posts', Post)
