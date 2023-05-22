import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme

DefaultTheme.enhanceApp = ({ app }) => {
    app.config.compilerOptions = {
        isCustomElement: tag => tag.includes('-')
    }
}