import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl p-6 sm:p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4">
          {project.imageUrl && (
            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-gray-200 shrink-0 bg-gray-50 flex items-center justify-center">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                {project.metaInfo?.team || 'Academic Project'}
              </span>
              {project.metaInfo?.focus && (
                <span className="text-xs text-gray-500 font-mono">
                  {project.metaInfo.focus}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-950">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
              University of Peradeniya • Engineering Showcase
            </p>
          </div>
        </div>

        {/* Full narrative */}
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
          <p>{project.details?.fullDescription || project.description}</p>

          {project.details?.keyFeatures && (
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Key Engineering Highlights:</h4>
              <ul className="space-y-1.5 list-none">
                {project.details.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.details?.role && (
            <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-100 text-xs sm:text-sm">
              <strong className="text-indigo-950 block font-semibold mb-0.5">My Role &amp; Contribution:</strong>
              <span className="text-indigo-900">{project.details.role}</span>
            </div>
          )}

          {project.details?.impact && (
            <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-100 text-xs sm:text-sm">
              <strong className="text-amber-950 block font-semibold mb-0.5">Outcome &amp; Performance:</strong>
              <span className="text-amber-900">{project.details.impact}</span>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <h4 className="font-bold text-gray-900 mb-2 text-xs uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {(project.details?.technologies || project.tags).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          {project.linkUrl ? (
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-xs hover:shadow-md"
            >
              <span>Visit Repository</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </a>
          ) : (
            <span className="text-xs text-gray-400 font-mono">Prototype Lab Demo</span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
