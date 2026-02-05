import { MessageSquare, Calendar, ChevronRight, TrendingUp } from 'lucide-react'

export default function DiscussionForum() {
  const discussions = [
    {
      title: 'ICX7150-C12P -2X1G - No Connectivity to the switch',
      replies: 3,
      views: 42,
      created: '01/12/26',
      category: 'Switches',
    },
    {
      title: 'ICX 7150-C12P Switch Bad Fit Kernel Image Format',
      replies: 1,
      views: 28,
      created: '01/12/26',
      category: 'Switches',
    },
    {
      title: 'Slow WiFi',
      replies: 5,
      views: 87,
      created: '01/12/26',
      category: 'Access Points',
    },
    {
      title: 'issues with access points wifi connection',
      replies: 2,
      views: 35,
      created: '01/12/26',
      category: 'Access Points',
    },
    {
      title: 'Upgrade from Lennar r510',
      replies: 0,
      views: 19,
      created: '01/12/26',
      category: 'General',
    },
    {
      title: 'QuadGen ICX 7150-C12P Died',
      replies: 2,
      views: 52,
      created: '01/12/26',
      category: 'Switches',
    },
    {
      title: 'How to get firmware for my ICX-6430-24P Switches?',
      replies: 1,
      views: 31,
      created: '01/11/26',
      category: 'Firmware',
    },
    {
      title: 'ICX7150-C12P insufficient powering R750',
      replies: 3,
      views: 48,
      created: '01/11/26',
      category: 'Switches',
    },
  ]

  return (
    <div className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Community Discussions</h2>
          <p className="text-gray-600 mt-1">Get help from the QuadGen community</p>
        </div>
        <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
          Start Discussion
        </button>
      </div>

      <div className="grid gap-4">
        {discussions.map((discussion, index) => (
          <a
            key={index}
            href="#"
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded">
                    {discussion.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{discussion.created}</span>
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 text-balance mb-3">
                  {discussion.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{discussion.views} views</span>
                  </span>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
            </div>
          </a>
        ))}
      </div>

      <button className="mt-6 w-full py-2 border border-blue-900 text-blue-900 rounded font-medium hover:bg-blue-50 transition">
        View All Discussions
      </button>
    </div>
  )
}
