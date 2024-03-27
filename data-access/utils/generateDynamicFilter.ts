import { TasksSchemaType } from '@/types';

const generateDynamicFilter = (searchParams: TasksSchemaType) => {
  console.log(searchParams);

  const dynamicFilter: {
    orderBy: {
      id: 'desc' | 'asc';
    };
    skip: number;
    cursor:
      | {
          id: number;
        }
      | undefined;
    take: 10 | 20 | 30 | 40 | 50 | -10 | -20 | -30 | -40 | -50;
    where: {
      title?: {
        contains: string;
      };
      status?: {
        statusName: 'in progress' | 'todo' | 'done' | 'canceled';
      };
      priority?: {
        priorityName: 'high' | 'low' | 'medium';
      };
      createdAt?: {
        lt?: Date;
        gt?: Date;
      };
    };
  } = {
    take: 10,
    where: {},
    orderBy: { id: 'asc' },
    skip: 0,
    cursor: undefined,
  };

  if (searchParams.search) {
    dynamicFilter.where.title = {
      contains: searchParams.search,
    };
  }

  if (searchParams.status) {
    dynamicFilter.where.status = {
      statusName: searchParams.status,
    };
  }

  if (searchParams.priority) {
    dynamicFilter.where.priority = {
      priorityName: searchParams.priority,
    };
  }

  if (searchParams.from) {
    dynamicFilter.where.createdAt = {
      gt: new Date(searchParams.from),
    };
  }

  if (searchParams.to) {
    dynamicFilter.where.createdAt = {
      lt: new Date(searchParams.to),
    };
  }

  if (searchParams.limit) {
    const limit = Number(searchParams.limit);
    if ([10, 20, 30, 40, 50].includes(limit)) {
      dynamicFilter.take = limit as 10 | 20 | 30 | 40 | 50;
    }
  }

  if (searchParams.order) {
    const order = searchParams.order === 'ascending' ? 'asc' : 'desc';
    dynamicFilter.orderBy.id = order;
  }

  if (searchParams.cursor) {
    dynamicFilter.cursor = {
      id: Number(searchParams.cursor),
    };
    dynamicFilter.skip = 1;
  }

  return dynamicFilter;
};

export default generateDynamicFilter;
