'use server';

import { getTasksDTO } from '@/data-access/tasks/getTasks-dto';
import { tasksSchema } from './schema/actionSchema';
import { getTaskParam } from './types/actionTypes';

export const getTasks = async (searchParams: getTaskParam) => {
  const result = tasksSchema.parse(searchParams);
  return getTasksDTO(result);
};
