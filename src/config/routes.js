import component0 from '../blogs/index.md';
import component1 from '../blogs/Note/CSS/float.md';
import component2 from '../blogs/Note/JS/apply.md';
import component3 from '../blogs/Note/JS/call.md';
import component4 from '../blogs/StudyVue/Reactive/defineProperty.md';
export default [
		{
				path: '/',
				redirect: '/blogsindex'
		},
		{
				path: '/blogsindex',
				name: 'component0',
				component: component0
		},
		{
				path: '/blogsNoteCSSfloat',
				name: 'component1',
				component: component1
		},
		{
				path: '/blogsNoteJSapply',
				name: 'component2',
				component: component2
		},
		{
				path: '/blogsNoteJScall',
				name: 'component3',
				component: component3
		},
		{
				path: '/blogsStudyVueReactivedefineProperty',
				name: 'component4',
				component: component4
		},
]