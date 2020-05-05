import React from 'react'
import fetch from 'node-fetch'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'
import DefaultSelect from 'part:@sanity/components/selects/default'

const DynamicData = (props) => {
  const unsetItem = {title: '', value: 'unset'}
  const getGitHubRepos = () => {
    const ghurl = `https://api.github.com/users/brexhq/repos`
    fetch(ghurl)
      .then(response => response.json())
      .then(repos => repos.slice(0, 5).map(({name}) => {
        return {
          title: name, value: name
        }
      })).then(data => setExperiments([unsetItem, ...data]))
  }

  const setValue = (item) => {
    const {value} = item
    const {onChange} = props
    onChange(PatchEvent.from(value === 'unset' ? unset() : set(value)))
  }

  React.useEffect(() => {
    getGitHubRepos()
  }, [])

  const [experiments, setExperiments] = React.useState([])
  const {type, value} = props
  const {title, description} = type
  const currentValue = experiments.find(({value: optionVal}) => optionVal === value)

  return (
    <FormField label={title} description={description}>
      <DefaultSelect value={currentValue} placeholder={'Select value'} items={experiments} onChange={setValue} />
    </FormField>
  )
}
export default DynamicData
