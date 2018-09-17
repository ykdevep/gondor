import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Role[]>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sections: <T = Section[]>(args: { where?: SectionWhereInput, orderBy?: SectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    exercises: <T = Exercise[]>(args: { where?: ExerciseWhereInput, orderBy?: ExerciseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tests: <T = Test[]>(args: { where?: TestWhereInput, orderBy?: TestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    section: <T = Section | null>(args: { where: SectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    exercise: <T = Exercise | null>(args: { where: ExerciseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    test: <T = Test | null>(args: { where: TestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionsConnection: <T = SectionConnection>(args: { where?: SectionWhereInput, orderBy?: SectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    exercisesConnection: <T = ExerciseConnection>(args: { where?: ExerciseWhereInput, orderBy?: ExerciseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    testsConnection: <T = TestConnection>(args: { where?: TestWhereInput, orderBy?: TestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSection: <T = Section>(args: { data: SectionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createExercise: <T = Exercise>(args: { data: ExerciseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTest: <T = Test>(args: { data: TestCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSection: <T = Section | null>(args: { data: SectionUpdateInput, where: SectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateExercise: <T = Exercise | null>(args: { data: ExerciseUpdateInput, where: ExerciseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTest: <T = Test | null>(args: { data: TestUpdateInput, where: TestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSection: <T = Section | null>(args: { where: SectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteExercise: <T = Exercise | null>(args: { where: ExerciseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTest: <T = Test | null>(args: { where: TestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSection: <T = Section>(args: { where: SectionWhereUniqueInput, create: SectionCreateInput, update: SectionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertExercise: <T = Exercise>(args: { where: ExerciseWhereUniqueInput, create: ExerciseCreateInput, update: ExerciseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTest: <T = Test>(args: { where: TestWhereUniqueInput, create: TestCreateInput, update: TestUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateInput, where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySections: <T = BatchPayload>(args: { data: SectionUpdateInput, where?: SectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyExercises: <T = BatchPayload>(args: { data: ExerciseUpdateInput, where?: ExerciseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTests: <T = BatchPayload>(args: { data: TestUpdateInput, where?: TestWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySections: <T = BatchPayload>(args: { where?: SectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyExercises: <T = BatchPayload>(args: { where?: ExerciseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTests: <T = BatchPayload>(args: { where?: TestWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    section: <T = SectionSubscriptionPayload | null>(args: { where?: SectionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    exercise: <T = ExerciseSubscriptionPayload | null>(args: { where?: ExerciseSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    test: <T = TestSubscriptionPayload | null>(args: { where?: TestSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  File: (where?: FileWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
  Section: (where?: SectionWhereInput) => Promise<boolean>
  Exercise: (where?: ExerciseWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Test: (where?: TestWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateExercise {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateSection {
  count: Int!
}

type AggregateTest {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Exercise implements Node {
  id: ID!
  code: String!
  description: String
  sections(where: SectionWhereInput, orderBy: SectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Section!]
}

"""A connection to a list of items."""
type ExerciseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ExerciseEdge]!
  aggregate: AggregateExercise!
}

input ExerciseCreateInput {
  code: String!
  description: String
  sections: SectionCreateManyInput
}

input ExerciseCreateManyInput {
  create: [ExerciseCreateInput!]
  connect: [ExerciseWhereUniqueInput!]
}

"""An edge in a connection."""
type ExerciseEdge {
  """The item at the end of the edge."""
  node: Exercise!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ExerciseOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ExercisePreviousValues {
  id: ID!
  code: String!
  description: String
}

type ExerciseSubscriptionPayload {
  mutation: MutationType!
  node: Exercise
  updatedFields: [String!]
  previousValues: ExercisePreviousValues
}

input ExerciseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ExerciseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExerciseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExerciseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ExerciseWhereInput
}

input ExerciseUpdateDataInput {
  code: String
  description: String
  sections: SectionUpdateManyInput
}

input ExerciseUpdateInput {
  code: String
  description: String
  sections: SectionUpdateManyInput
}

input ExerciseUpdateManyInput {
  create: [ExerciseCreateInput!]
  connect: [ExerciseWhereUniqueInput!]
  disconnect: [ExerciseWhereUniqueInput!]
  delete: [ExerciseWhereUniqueInput!]
  update: [ExerciseUpdateWithWhereUniqueNestedInput!]
  upsert: [ExerciseUpsertWithWhereUniqueNestedInput!]
}

input ExerciseUpdateWithWhereUniqueNestedInput {
  where: ExerciseWhereUniqueInput!
  data: ExerciseUpdateDataInput!
}

input ExerciseUpsertWithWhereUniqueNestedInput {
  where: ExerciseWhereUniqueInput!
  update: ExerciseUpdateDataInput!
  create: ExerciseCreateInput!
}

input ExerciseWhereInput {
  """Logical AND on all given filters."""
  AND: [ExerciseWhereInput!]

  """Logical OR on all given filters."""
  OR: [ExerciseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ExerciseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  sections_every: SectionWhereInput
  sections_some: SectionWhereInput
  sections_none: SectionWhereInput
}

input ExerciseWhereUniqueInput {
  id: ID
  code: String
}

type File implements Node {
  id: ID!
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
  size: Int!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
  size: Int!
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  path_ASC
  path_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  size_ASC
  size_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FilePreviousValues {
  id: ID!
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
  size: Int!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateInput {
  path: String
  filename: String
  mimetype: String
  encoding: String
  size: Int
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  path: String

  """All values that are not equal to given value."""
  path_not: String

  """All values that are contained in given list."""
  path_in: [String!]

  """All values that are not contained in given list."""
  path_not_in: [String!]

  """All values less than the given value."""
  path_lt: String

  """All values less than or equal the given value."""
  path_lte: String

  """All values greater than the given value."""
  path_gt: String

  """All values greater than or equal the given value."""
  path_gte: String

  """All values containing the given string."""
  path_contains: String

  """All values not containing the given string."""
  path_not_contains: String

  """All values starting with the given string."""
  path_starts_with: String

  """All values not starting with the given string."""
  path_not_starts_with: String

  """All values ending with the given string."""
  path_ends_with: String

  """All values not ending with the given string."""
  path_not_ends_with: String
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  size: Int

  """All values that are not equal to given value."""
  size_not: Int

  """All values that are contained in given list."""
  size_in: [Int!]

  """All values that are not contained in given list."""
  size_not_in: [Int!]

  """All values less than the given value."""
  size_lt: Int

  """All values less than or equal the given value."""
  size_lte: Int

  """All values greater than the given value."""
  size_gt: Int

  """All values greater than or equal the given value."""
  size_gte: Int
}

input FileWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createFile(data: FileCreateInput!): File!
  createRole(data: RoleCreateInput!): Role!
  createSection(data: SectionCreateInput!): Section!
  createExercise(data: ExerciseCreateInput!): Exercise!
  createUser(data: UserCreateInput!): User!
  createTest(data: TestCreateInput!): Test!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateSection(data: SectionUpdateInput!, where: SectionWhereUniqueInput!): Section
  updateExercise(data: ExerciseUpdateInput!, where: ExerciseWhereUniqueInput!): Exercise
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateTest(data: TestUpdateInput!, where: TestWhereUniqueInput!): Test
  deleteFile(where: FileWhereUniqueInput!): File
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteSection(where: SectionWhereUniqueInput!): Section
  deleteExercise(where: ExerciseWhereUniqueInput!): Exercise
  deleteUser(where: UserWhereUniqueInput!): User
  deleteTest(where: TestWhereUniqueInput!): Test
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  upsertSection(where: SectionWhereUniqueInput!, create: SectionCreateInput!, update: SectionUpdateInput!): Section!
  upsertExercise(where: ExerciseWhereUniqueInput!, create: ExerciseCreateInput!, update: ExerciseUpdateInput!): Exercise!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertTest(where: TestWhereUniqueInput!, create: TestCreateInput!, update: TestUpdateInput!): Test!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateInput!, where: RoleWhereInput): BatchPayload!
  updateManySections(data: SectionUpdateInput!, where: SectionWhereInput): BatchPayload!
  updateManyExercises(data: ExerciseUpdateInput!, where: ExerciseWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyTests(data: TestUpdateInput!, where: TestWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  deleteManySections(where: SectionWhereInput): BatchPayload!
  deleteManyExercises(where: ExerciseWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyTests(where: TestWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  sections(where: SectionWhereInput, orderBy: SectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Section]!
  exercises(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exercise]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test]!
  file(where: FileWhereUniqueInput!): File
  role(where: RoleWhereUniqueInput!): Role
  section(where: SectionWhereUniqueInput!): Section
  exercise(where: ExerciseWhereUniqueInput!): Exercise
  user(where: UserWhereUniqueInput!): User
  test(where: TestWhereUniqueInput!): Test
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  sectionsConnection(where: SectionWhereInput, orderBy: SectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SectionConnection!
  exercisesConnection(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExerciseConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  testsConnection(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Role implements Node {
  id: ID!
  name: String!
  description: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type RoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  description: String
  users: UserCreateManyInput
}

input RoleCreateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
}

"""An edge in a connection."""
type RoleEdge {
  """The item at the end of the edge."""
  node: Role!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
  description: String
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
}

input RoleUpdateDataInput {
  name: String
  description: String
  users: UserUpdateManyInput
}

input RoleUpdateInput {
  name: String
  description: String
  users: UserUpdateManyInput
}

input RoleUpdateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  delete: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueNestedInput!]
  upsert: [RoleUpsertWithWhereUniqueNestedInput!]
}

input RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateDataInput!
}

input RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateDataInput!
  create: RoleCreateInput!
}

input RoleWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input RoleWhereUniqueInput {
  id: ID
  name: String
}

type Section implements Node {
  id: ID!
  name: String!
  description: String
  exercises(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exercise!]
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test!]
}

"""A connection to a list of items."""
type SectionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SectionEdge]!
  aggregate: AggregateSection!
}

input SectionCreateInput {
  name: String!
  description: String
  exercises: ExerciseCreateManyInput
  tests: TestCreateManyInput
}

input SectionCreateManyInput {
  create: [SectionCreateInput!]
  connect: [SectionWhereUniqueInput!]
}

"""An edge in a connection."""
type SectionEdge {
  """The item at the end of the edge."""
  node: Section!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SectionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SectionPreviousValues {
  id: ID!
  name: String!
  description: String
}

type SectionSubscriptionPayload {
  mutation: MutationType!
  node: Section
  updatedFields: [String!]
  previousValues: SectionPreviousValues
}

input SectionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SectionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SectionWhereInput
}

input SectionUpdateDataInput {
  name: String
  description: String
  exercises: ExerciseUpdateManyInput
  tests: TestUpdateManyInput
}

input SectionUpdateInput {
  name: String
  description: String
  exercises: ExerciseUpdateManyInput
  tests: TestUpdateManyInput
}

input SectionUpdateManyInput {
  create: [SectionCreateInput!]
  connect: [SectionWhereUniqueInput!]
  disconnect: [SectionWhereUniqueInput!]
  delete: [SectionWhereUniqueInput!]
  update: [SectionUpdateWithWhereUniqueNestedInput!]
  upsert: [SectionUpsertWithWhereUniqueNestedInput!]
}

input SectionUpdateWithWhereUniqueNestedInput {
  where: SectionWhereUniqueInput!
  data: SectionUpdateDataInput!
}

input SectionUpsertWithWhereUniqueNestedInput {
  where: SectionWhereUniqueInput!
  update: SectionUpdateDataInput!
  create: SectionCreateInput!
}

input SectionWhereInput {
  """Logical AND on all given filters."""
  AND: [SectionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  exercises_every: ExerciseWhereInput
  exercises_some: ExerciseWhereInput
  exercises_none: ExerciseWhereInput
  tests_every: TestWhereInput
  tests_some: TestWhereInput
  tests_none: TestWhereInput
}

input SectionWhereUniqueInput {
  id: ID
  name: String
}

enum Sexs {
  MALE
  FEMALE
}

type Subscription {
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  section(where: SectionSubscriptionWhereInput): SectionSubscriptionPayload
  exercise(where: ExerciseSubscriptionWhereInput): ExerciseSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  test(where: TestSubscriptionWhereInput): TestSubscriptionPayload
}

type Test implements Node {
  id: ID!
  type: Types!
  description: String
  enable: Boolean!
  sections(where: SectionWhereInput, orderBy: SectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Section!]
}

"""A connection to a list of items."""
type TestConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TestEdge]!
  aggregate: AggregateTest!
}

input TestCreateInput {
  type: Types!
  description: String
  enable: Boolean
  sections: SectionCreateManyInput
}

input TestCreateManyInput {
  create: [TestCreateInput!]
  connect: [TestWhereUniqueInput!]
}

"""An edge in a connection."""
type TestEdge {
  """The item at the end of the edge."""
  node: Test!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TestOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  description_ASC
  description_DESC
  enable_ASC
  enable_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TestPreviousValues {
  id: ID!
  type: Types!
  description: String
  enable: Boolean!
}

type TestSubscriptionPayload {
  mutation: MutationType!
  node: Test
  updatedFields: [String!]
  previousValues: TestPreviousValues
}

input TestSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TestSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TestSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TestSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TestWhereInput
}

input TestUpdateDataInput {
  type: Types
  description: String
  enable: Boolean
  sections: SectionUpdateManyInput
}

input TestUpdateInput {
  type: Types
  description: String
  enable: Boolean
  sections: SectionUpdateManyInput
}

input TestUpdateManyInput {
  create: [TestCreateInput!]
  connect: [TestWhereUniqueInput!]
  disconnect: [TestWhereUniqueInput!]
  delete: [TestWhereUniqueInput!]
  update: [TestUpdateWithWhereUniqueNestedInput!]
  upsert: [TestUpsertWithWhereUniqueNestedInput!]
}

input TestUpdateWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput!
  data: TestUpdateDataInput!
}

input TestUpsertWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput!
  update: TestUpdateDataInput!
  create: TestCreateInput!
}

input TestWhereInput {
  """Logical AND on all given filters."""
  AND: [TestWhereInput!]

  """Logical OR on all given filters."""
  OR: [TestWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TestWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: Types

  """All values that are not equal to given value."""
  type_not: Types

  """All values that are contained in given list."""
  type_in: [Types!]

  """All values that are not contained in given list."""
  type_not_in: [Types!]
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  enable: Boolean

  """All values that are not equal to given value."""
  enable_not: Boolean
  sections_every: SectionWhereInput
  sections_some: SectionWhereInput
  sections_none: SectionWhereInput
}

input TestWhereUniqueInput {
  id: ID
}

enum Types {
  INITIAL
}

type User implements Node {
  id: ID!
  email: String!
  password: String
  firstname: String!
  lastname: String!
  birthdate: DateTime!
  sex: Sexs!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String
  firstname: String!
  lastname: String!
  birthdate: DateTime!
  sex: Sexs!
  roles: RoleCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  birthdate_ASC
  birthdate_DESC
  sex_ASC
  sex_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String
  firstname: String!
  lastname: String!
  birthdate: DateTime!
  sex: Sexs!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  firstname: String
  lastname: String
  birthdate: DateTime
  sex: Sexs
  roles: RoleUpdateManyInput
}

input UserUpdateInput {
  email: String
  password: String
  firstname: String
  lastname: String
  birthdate: DateTime
  sex: Sexs
  roles: RoleUpdateManyInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  firstname: String

  """All values that are not equal to given value."""
  firstname_not: String

  """All values that are contained in given list."""
  firstname_in: [String!]

  """All values that are not contained in given list."""
  firstname_not_in: [String!]

  """All values less than the given value."""
  firstname_lt: String

  """All values less than or equal the given value."""
  firstname_lte: String

  """All values greater than the given value."""
  firstname_gt: String

  """All values greater than or equal the given value."""
  firstname_gte: String

  """All values containing the given string."""
  firstname_contains: String

  """All values not containing the given string."""
  firstname_not_contains: String

  """All values starting with the given string."""
  firstname_starts_with: String

  """All values not starting with the given string."""
  firstname_not_starts_with: String

  """All values ending with the given string."""
  firstname_ends_with: String

  """All values not ending with the given string."""
  firstname_not_ends_with: String
  lastname: String

  """All values that are not equal to given value."""
  lastname_not: String

  """All values that are contained in given list."""
  lastname_in: [String!]

  """All values that are not contained in given list."""
  lastname_not_in: [String!]

  """All values less than the given value."""
  lastname_lt: String

  """All values less than or equal the given value."""
  lastname_lte: String

  """All values greater than the given value."""
  lastname_gt: String

  """All values greater than or equal the given value."""
  lastname_gte: String

  """All values containing the given string."""
  lastname_contains: String

  """All values not containing the given string."""
  lastname_not_contains: String

  """All values starting with the given string."""
  lastname_starts_with: String

  """All values not starting with the given string."""
  lastname_not_starts_with: String

  """All values ending with the given string."""
  lastname_ends_with: String

  """All values not ending with the given string."""
  lastname_not_ends_with: String
  birthdate: DateTime

  """All values that are not equal to given value."""
  birthdate_not: DateTime

  """All values that are contained in given list."""
  birthdate_in: [DateTime!]

  """All values that are not contained in given list."""
  birthdate_not_in: [DateTime!]

  """All values less than the given value."""
  birthdate_lt: DateTime

  """All values less than or equal the given value."""
  birthdate_lte: DateTime

  """All values greater than the given value."""
  birthdate_gt: DateTime

  """All values greater than or equal the given value."""
  birthdate_gte: DateTime
  sex: Sexs

  """All values that are not equal to given value."""
  sex_not: Sexs

  """All values that are contained in given list."""
  sex_in: [Sexs!]

  """All values that are not contained in given list."""
  sex_not_in: [Sexs!]
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type Sexs =   'MALE' |
  'FEMALE'

export type RoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstname_ASC' |
  'firstname_DESC' |
  'lastname_ASC' |
  'lastname_DESC' |
  'birthdate_ASC' |
  'birthdate_DESC' |
  'sex_ASC' |
  'sex_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type Types =   'INITIAL'

export type SectionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ExerciseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'code_ASC' |
  'code_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'path_ASC' |
  'path_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'size_ASC' |
  'size_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TestOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'description_ASC' |
  'description_DESC' |
  'enable_ASC' |
  'enable_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateInput {
  email: String
  password?: String
  firstname: String
  lastname: String
  birthdate: DateTime
  sex: Sexs
  roles?: RoleCreateManyInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  path?: String
  path_not?: String
  path_in?: String[] | String
  path_not_in?: String[] | String
  path_lt?: String
  path_lte?: String
  path_gt?: String
  path_gte?: String
  path_contains?: String
  path_not_contains?: String
  path_starts_with?: String
  path_not_starts_with?: String
  path_ends_with?: String
  path_not_ends_with?: String
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  size?: Int
  size_not?: Int
  size_in?: Int[] | Int
  size_not_in?: Int[] | Int
  size_lt?: Int
  size_lte?: Int
  size_gt?: Int
  size_gte?: Int
}

export interface TestUpdateManyInput {
  create?: TestCreateInput[] | TestCreateInput
  connect?: TestWhereUniqueInput[] | TestWhereUniqueInput
  disconnect?: TestWhereUniqueInput[] | TestWhereUniqueInput
  delete?: TestWhereUniqueInput[] | TestWhereUniqueInput
  update?: TestUpdateWithWhereUniqueNestedInput[] | TestUpdateWithWhereUniqueNestedInput
  upsert?: TestUpsertWithWhereUniqueNestedInput[] | TestUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface SectionUpdateDataInput {
  name?: String
  description?: String
  exercises?: ExerciseUpdateManyInput
  tests?: TestUpdateManyInput
}

export interface TestCreateManyInput {
  create?: TestCreateInput[] | TestCreateInput
  connect?: TestWhereUniqueInput[] | TestWhereUniqueInput
}

export interface SectionUpdateWithWhereUniqueNestedInput {
  where: SectionWhereUniqueInput
  data: SectionUpdateDataInput
}

export interface TestSubscriptionWhereInput {
  AND?: TestSubscriptionWhereInput[] | TestSubscriptionWhereInput
  OR?: TestSubscriptionWhereInput[] | TestSubscriptionWhereInput
  NOT?: TestSubscriptionWhereInput[] | TestSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TestWhereInput
}

export interface SectionUpdateManyInput {
  create?: SectionCreateInput[] | SectionCreateInput
  connect?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
  disconnect?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
  delete?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
  update?: SectionUpdateWithWhereUniqueNestedInput[] | SectionUpdateWithWhereUniqueNestedInput
  upsert?: SectionUpsertWithWhereUniqueNestedInput[] | SectionUpsertWithWhereUniqueNestedInput
}

export interface ExerciseWhereInput {
  AND?: ExerciseWhereInput[] | ExerciseWhereInput
  OR?: ExerciseWhereInput[] | ExerciseWhereInput
  NOT?: ExerciseWhereInput[] | ExerciseWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  code?: String
  code_not?: String
  code_in?: String[] | String
  code_not_in?: String[] | String
  code_lt?: String
  code_lte?: String
  code_gt?: String
  code_gte?: String
  code_contains?: String
  code_not_contains?: String
  code_starts_with?: String
  code_not_starts_with?: String
  code_ends_with?: String
  code_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  sections_every?: SectionWhereInput
  sections_some?: SectionWhereInput
  sections_none?: SectionWhereInput
}

export interface ExerciseUpdateDataInput {
  code?: String
  description?: String
  sections?: SectionUpdateManyInput
}

export interface RoleWhereInput {
  AND?: RoleWhereInput[] | RoleWhereInput
  OR?: RoleWhereInput[] | RoleWhereInput
  NOT?: RoleWhereInput[] | RoleWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface ExerciseUpdateWithWhereUniqueNestedInput {
  where: ExerciseWhereUniqueInput
  data: ExerciseUpdateDataInput
}

export interface SectionSubscriptionWhereInput {
  AND?: SectionSubscriptionWhereInput[] | SectionSubscriptionWhereInput
  OR?: SectionSubscriptionWhereInput[] | SectionSubscriptionWhereInput
  NOT?: SectionSubscriptionWhereInput[] | SectionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SectionWhereInput
}

export interface ExerciseUpdateManyInput {
  create?: ExerciseCreateInput[] | ExerciseCreateInput
  connect?: ExerciseWhereUniqueInput[] | ExerciseWhereUniqueInput
  disconnect?: ExerciseWhereUniqueInput[] | ExerciseWhereUniqueInput
  delete?: ExerciseWhereUniqueInput[] | ExerciseWhereUniqueInput
  update?: ExerciseUpdateWithWhereUniqueNestedInput[] | ExerciseUpdateWithWhereUniqueNestedInput
  upsert?: ExerciseUpsertWithWhereUniqueNestedInput[] | ExerciseUpsertWithWhereUniqueNestedInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface SectionUpdateInput {
  name?: String
  description?: String
  exercises?: ExerciseUpdateManyInput
  tests?: TestUpdateManyInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface SectionWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput
  update: RoleUpdateDataInput
  create: RoleCreateInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface RoleUpdateDataInput {
  name?: String
  description?: String
  users?: UserUpdateManyInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  firstname?: String
  lastname?: String
  birthdate?: DateTime
  sex?: Sexs
  roles?: RoleUpdateManyInput
}

export interface RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput
  data: RoleUpdateDataInput
}

export interface ExerciseUpsertWithWhereUniqueNestedInput {
  where: ExerciseWhereUniqueInput
  update: ExerciseUpdateDataInput
  create: ExerciseCreateInput
}

export interface FileCreateInput {
  path: String
  filename: String
  mimetype: String
  encoding: String
  size: Int
}

export interface TestUpsertWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput
  update: TestUpdateDataInput
  create: TestCreateInput
}

export interface RoleCreateInput {
  name: String
  description?: String
  users?: UserCreateManyInput
}

export interface TestUpdateWithWhereUniqueNestedInput {
  where: TestWhereUniqueInput
  data: TestUpdateDataInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface SectionWhereInput {
  AND?: SectionWhereInput[] | SectionWhereInput
  OR?: SectionWhereInput[] | SectionWhereInput
  NOT?: SectionWhereInput[] | SectionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  exercises_every?: ExerciseWhereInput
  exercises_some?: ExerciseWhereInput
  exercises_none?: ExerciseWhereInput
  tests_every?: TestWhereInput
  tests_some?: TestWhereInput
  tests_none?: TestWhereInput
}

export interface RoleUpdateManyInput {
  create?: RoleCreateInput[] | RoleCreateInput
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput
  disconnect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput
  delete?: RoleWhereUniqueInput[] | RoleWhereUniqueInput
  update?: RoleUpdateWithWhereUniqueNestedInput[] | RoleUpdateWithWhereUniqueNestedInput
  upsert?: RoleUpsertWithWhereUniqueNestedInput[] | RoleUpsertWithWhereUniqueNestedInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface RoleCreateManyInput {
  create?: RoleCreateInput[] | RoleCreateInput
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput
}

export interface RoleSubscriptionWhereInput {
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RoleWhereInput
}

export interface SectionCreateInput {
  name: String
  description?: String
  exercises?: ExerciseCreateManyInput
  tests?: TestCreateManyInput
}

export interface RoleWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface ExerciseCreateManyInput {
  create?: ExerciseCreateInput[] | ExerciseCreateInput
  connect?: ExerciseWhereUniqueInput[] | ExerciseWhereUniqueInput
}

export interface TestWhereUniqueInput {
  id?: ID_Input
}

export interface ExerciseCreateInput {
  code: String
  description?: String
  sections?: SectionCreateManyInput
}

export interface SectionUpsertWithWhereUniqueNestedInput {
  where: SectionWhereUniqueInput
  update: SectionUpdateDataInput
  create: SectionCreateInput
}

export interface SectionCreateManyInput {
  create?: SectionCreateInput[] | SectionCreateInput
  connect?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  firstname?: String
  firstname_not?: String
  firstname_in?: String[] | String
  firstname_not_in?: String[] | String
  firstname_lt?: String
  firstname_lte?: String
  firstname_gt?: String
  firstname_gte?: String
  firstname_contains?: String
  firstname_not_contains?: String
  firstname_starts_with?: String
  firstname_not_starts_with?: String
  firstname_ends_with?: String
  firstname_not_ends_with?: String
  lastname?: String
  lastname_not?: String
  lastname_in?: String[] | String
  lastname_not_in?: String[] | String
  lastname_lt?: String
  lastname_lte?: String
  lastname_gt?: String
  lastname_gte?: String
  lastname_contains?: String
  lastname_not_contains?: String
  lastname_starts_with?: String
  lastname_not_starts_with?: String
  lastname_ends_with?: String
  lastname_not_ends_with?: String
  birthdate?: DateTime
  birthdate_not?: DateTime
  birthdate_in?: DateTime[] | DateTime
  birthdate_not_in?: DateTime[] | DateTime
  birthdate_lt?: DateTime
  birthdate_lte?: DateTime
  birthdate_gt?: DateTime
  birthdate_gte?: DateTime
  sex?: Sexs
  sex_not?: Sexs
  sex_in?: Sexs[] | Sexs
  sex_not_in?: Sexs[] | Sexs
  roles_every?: RoleWhereInput
  roles_some?: RoleWhereInput
  roles_none?: RoleWhereInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  firstname?: String
  lastname?: String
  birthdate?: DateTime
  sex?: Sexs
  roles?: RoleUpdateManyInput
}

export interface ExerciseSubscriptionWhereInput {
  AND?: ExerciseSubscriptionWhereInput[] | ExerciseSubscriptionWhereInput
  OR?: ExerciseSubscriptionWhereInput[] | ExerciseSubscriptionWhereInput
  NOT?: ExerciseSubscriptionWhereInput[] | ExerciseSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ExerciseWhereInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface RoleUpdateInput {
  name?: String
  description?: String
  users?: UserUpdateManyInput
}

export interface FileUpdateInput {
  path?: String
  filename?: String
  mimetype?: String
  encoding?: String
  size?: Int
}

export interface TestCreateInput {
  type: Types
  description?: String
  enable?: Boolean
  sections?: SectionCreateManyInput
}

export interface TestUpdateInput {
  type?: Types
  description?: String
  enable?: Boolean
  sections?: SectionUpdateManyInput
}

export interface TestWhereInput {
  AND?: TestWhereInput[] | TestWhereInput
  OR?: TestWhereInput[] | TestWhereInput
  NOT?: TestWhereInput[] | TestWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: Types
  type_not?: Types
  type_in?: Types[] | Types
  type_not_in?: Types[] | Types
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  enable?: Boolean
  enable_not?: Boolean
  sections_every?: SectionWhereInput
  sections_some?: SectionWhereInput
  sections_none?: SectionWhereInput
}

export interface TestUpdateDataInput {
  type?: Types
  description?: String
  enable?: Boolean
  sections?: SectionUpdateManyInput
}

export interface ExerciseUpdateInput {
  code?: String
  description?: String
  sections?: SectionUpdateManyInput
}

export interface ExerciseWhereUniqueInput {
  id?: ID_Input
  code?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface TestPreviousValues {
  id: ID_Output
  type: Types
  description?: String
  enable: Boolean
}

export interface Test extends Node {
  id: ID_Output
  type: Types
  description?: String
  enable: Boolean
  sections?: Section[]
}

export interface Role extends Node {
  id: ID_Output
  name: String
  description?: String
  users?: User[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateTest {
  count: Int
}

export interface TestSubscriptionPayload {
  mutation: MutationType
  node?: Test
  updatedFields?: String[]
  previousValues?: TestPreviousValues
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface TestEdge {
  node: Test
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface TestConnection {
  pageInfo: PageInfo
  edges: TestEdge[]
  aggregate: AggregateTest
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  email: String
  password?: String
  firstname: String
  lastname: String
  birthdate: DateTime
  sex: Sexs
  roles?: Role[]
}

/*
 * An edge in a connection.

 */
export interface ExerciseEdge {
  node: Exercise
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password?: String
  firstname: String
  lastname: String
  birthdate: DateTime
  sex: Sexs
}

export interface AggregateSection {
  count: Int
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface SectionConnection {
  pageInfo: PageInfo
  edges: SectionEdge[]
  aggregate: AggregateSection
}

export interface FilePreviousValues {
  id: ID_Output
  path: String
  filename: String
  mimetype: String
  encoding: String
  size: Int
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface Exercise extends Node {
  id: ID_Output
  code: String
  description?: String
  sections?: Section[]
}

export interface AggregateFile {
  count: Int
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role
  updatedFields?: String[]
  previousValues?: RolePreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface RolePreviousValues {
  id: ID_Output
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface File extends Node {
  id: ID_Output
  path: String
  filename: String
  mimetype: String
  encoding: String
  size: Int
}

/*
 * A connection to a list of items.

 */
export interface ExerciseConnection {
  pageInfo: PageInfo
  edges: ExerciseEdge[]
  aggregate: AggregateExercise
}

export interface SectionSubscriptionPayload {
  mutation: MutationType
  node?: Section
  updatedFields?: String[]
  previousValues?: SectionPreviousValues
}

export interface AggregateRole {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface ExercisePreviousValues {
  id: ID_Output
  code: String
  description?: String
}

export interface ExerciseSubscriptionPayload {
  mutation: MutationType
  node?: Exercise
  updatedFields?: String[]
  previousValues?: ExercisePreviousValues
}

export interface Section extends Node {
  id: ID_Output
  name: String
  description?: String
  exercises?: Exercise[]
  tests?: Test[]
}

export interface SectionPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

/*
 * A connection to a list of items.

 */
export interface RoleConnection {
  pageInfo: PageInfo
  edges: RoleEdge[]
  aggregate: AggregateRole
}

/*
 * An edge in a connection.

 */
export interface SectionEdge {
  node: Section
  cursor: String
}

export interface AggregateExercise {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean