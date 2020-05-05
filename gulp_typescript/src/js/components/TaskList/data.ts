export interface ITask {
    taskDataDescription: string,
    taskMark: string
}

export const hdTasksData: ITask[] = [
    {
        taskDataDescription: 'Покормить Васю',
        taskMark: 'marked'
    },
    {
        taskDataDescription: 'Разобраться где что и когда оно уже',
        taskMark: 'unmarked'
    },
    {
        taskDataDescription: 'Подучить Angular',
        taskMark: 'marked'
    },
    {
        taskDataDescription: 'Разобраться с genercs typescript',
        taskMark: 'unmarked'
    }
]