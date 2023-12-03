<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const { students } = data;
</script>

<Seo title="Students | School admin" description="Student list" />
<h1>Students</h1>

<table class="table">
    <thead>
        <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {#each students as student}
            <tr>
                <td>{student.id}</td>
                <td>
                    <a href={student.id}>{student.name}</a>
                </td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td> Edit </td>
            </tr>
        {/each}
    </tbody>
</table>
