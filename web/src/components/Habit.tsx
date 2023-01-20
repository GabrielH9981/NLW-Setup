interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return (
        <p>Tarefas Completadas: {props.completed}</p>
    )
}