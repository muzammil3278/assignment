import { jobs } from '../../quiz-json/data';

const Jobs = ({ jobList }) => {
  return (
<>
    <table className="jobs">
      <tr>
      <th>Title</th> <th>Company</th> <th>Location</th>
      </tr>
      {jobList.map((job) => (
        <tr key={job.id}>
          <td>{job.name}</td>
          <td>{job.company}</td>
          <td>{job.location}</td>
        </tr>
      ))}
    </table>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    
    props: {
      jobList: jobs
    }
  }
}

export default Jobs;