import { API_BASE } from "$env/static/private"

export const load = async() => {
    const getStudents = async() => {
        const resp = await fetch(`${API_BASE}/users`);
        const students = resp.json();
        return students;
    };

    return {
        students: getStudents()
    }
}