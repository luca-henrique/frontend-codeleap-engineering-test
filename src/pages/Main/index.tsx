import InputText from 'src/components/InputText'
import { Icons } from 'src/assets'

export const Main = () => {
  return (
    <div>
      <header>
        <h1>CodeLeap Network</h1>
      </header>

      <section>
        <form>
          <h2>What’s on your mind?</h2>
          <InputText label="Title" type="text" placeholder="hello world" />
          <InputText
            label="Contet"
            type="textarea"
            placeholder="Content here"
          />
          <button type="submit">create</button>
        </form>
      </section>

      <div>
        <header>
          <h2>My First Post at CodeLeap Network!</h2>
          <div>
            <img src={Icons.delete} alt="delete" />
            <img src={Icons.edit} alt="edit" />
          </div>
        </header>

        <div>
          <h5>@Victor</h5>
          <h5>25 minutes ago</h5>
        </div>
        <div>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </div>
      </div>
    </div>
  )
}
